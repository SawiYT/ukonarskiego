import sql from 'better-sqlite3';

const db = sql('blog.db');

export function getPost() {
	return db.prepare('SELECT * FROM blog').all();
}
