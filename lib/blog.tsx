import sql from 'better-sqlite3'

const db = sql('blog.db')

export function getPosts() {
	return db.prepare('SELECT * FROM blog').all()
}

export function getPost(slug: string) {
	return db.prepare('SELECT * FROM blog WHERE slug = ?').get(slug)
}
