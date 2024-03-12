import sql from 'better-sqlite3';
import { S3 } from '@aws-sdk/client-s3';

const db = sql('blog.db');
const s3 = new S3({
	region: 'eu-central-1',
});

export function getPosts() {
	return db.prepare('SELECT * FROM blog').all();
}

export function removePostById(id: number) {
	const post = db.prepare('SELECT * FROM blog WHERE id = ?').get(id) as { id: number; title: string };

	if (!post) {
		console.error(`Post with id ${id} not found.`);
		return;
	}

	db.prepare('DELETE FROM blog WHERE id = ?').run(id);

	s3.deleteObject({
		Bucket: 'ukonarskiego',
		Key: post?.title, 
	});
}

export async function savePost(post: any) {
	const fileName = `${post.title}`;

	const bufferedImage = await post.image.arrayBuffer();

	s3.putObject({
		Bucket: 'ukonarskiego',
		Key: fileName,
		Body: Buffer.from(bufferedImage),
		ContentType: post.image.type,
	});

	post.image = fileName;

	db.prepare(
		`
	INSERT INTO blog (title, summary, description, creator, image) VALUES (
		@title,
			@summary,
			@description,
			@creator,
			@image	
	)
	`
	).run(post);
}
