import sql from 'better-sqlite3';
import fs from 'node:fs';

const db = sql('blog.db');

export function getPosts() {
	return db.prepare('SELECT * FROM blog').all();
}

export function getPost(slug: string) {
	return db.prepare('SELECT * FROM blog WHERE slug = ?').get(slug);
}

export async function savePost(post: any) {
	const extension = post.image.name.split('.').pop();
	const fileName = `${post.title}.${extension}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await post.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), error => {
		if (error) {
			throw new Error('Saving image failded!');
		}
	});

	post.image = `/images/${fileName}`;

	db.prepare(`
	INSERT INTO blog (title, summary, description, creator, image) VALUES (
		@title,
			@summary,
			@description,
			@creator,
			@image	
	)
	`).run(post);
}
