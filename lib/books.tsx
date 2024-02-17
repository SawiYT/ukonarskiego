import sql from 'better-sqlite3';

const db = sql('books.db');

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
