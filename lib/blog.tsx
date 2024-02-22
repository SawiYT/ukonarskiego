import sql from 'better-sqlite3';
import fs from 'node:fs';
import { S3 } from '@aws-sdk/client-s3';

const db = sql('blog.db');
const s3 = new S3({
	region: 'eu-central-1',
});

export function getPosts() {
	return db.prepare('SELECT * FROM blog').all();
}

export function getPost(slug: string) {
	return db.prepare('SELECT * FROM blog WHERE slug = ?').get(slug);
}

export async function savePost(post: any) {
	const extension = post.image.name.split('.').pop();
	const fileName = `${post.title}.${extension}`;

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
