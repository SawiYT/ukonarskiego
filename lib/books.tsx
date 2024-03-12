import sql from 'better-sqlite3';

const db = sql('books.db');
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
	region: 'eu-central-1',
});

export function getBooks() {
	return db.prepare('SELECT * FROM books').all();
}

export async function saveBook(book: any) {
	db.prepare(
		`
        INSERT INTO books (subject, creator, title, publisher, class) VALUES (
            @subject,
            @creator,
            @title,
            @publisher,
            @class
        )
        `
	).run(book);
}

export function removeBookById(key: number) {
	const post = db.prepare('SELECT * FROM books WHERE key = ?').get(key);

	if (!post) {
		console.error(`Post with id ${key} not found.`);
		return;
	}

	db.prepare('DELETE FROM books WHERE key = ?').run(key);
}
