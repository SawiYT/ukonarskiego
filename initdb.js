const sql = require('better-sqlite3')
const booksDB = sql('books.db')
const blogDB = sql('blog.db')

const dummyPosts = [
	{
		title: 'Rozwijamy pasje uczniów',
		image: '/dummyimage.jpeg',
		summary: 'Wierzymy w was!',
		description:
			'Odkrywamy talenty naszych uczniów! Nasza szkoła nie tylko naucza, lecz również inspiruje do rozwijania pasji. Przykładem jest ta strona internetowa, stworzona przez jednego z uczniów, na której obecnie się znajdujecie.',
		creator: 'SilentStudent',
	},
	{
		title: 'Nasz klub szachowy',
		image: '/dummychess.jpg',
		summary: 'Posiadamy wlasny klub szachowy!',
		description:
			'Zapraszamy do uczestnictwa w naszym klubie, gdzie rozwijamy umiejętności szachowe i budujemy społeczność pasjonatów tej fascynującej gry.',
		creator: 'TwórcaKlubuSzachowego',
	},
]

const dummyBooks = [
	{
		subject: 'J.POLSKI',
		creator: `M. Chmiel, A. Cisowska, J. Kościerzyńska, H. Kusy, A. Wróblewska`,
		title: 'Active',
		publisher: 'Nowa Era',
	},
	{
		subject: 'J. ANGIELSKI',
		creator: `M. Chmiel, A. Cisowska, J. Kościerzyńska, H. Kusy, A. Wróblewska`,
		title: 'Active',
		publisher: 'Nowa Era',
	},
]

booksDB
	.prepare(
		`
   CREATE TABLE IF NOT EXISTS books (
       key INTEGER PRIMARY KEY AUTOINCREMENT,
       subject TEXT,
       creator TEXT,
       title TEXT,
       publisher TEXT
   )
   `
	)
	.run()

blogDB
	.prepare(
		`
   CREATE TABLE IF NOT EXISTS blog (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
	   summary TEXT NOT NULL,
       description TEXT NOT NULL,
       creator TEXT NOT NULL
    )
`
	)
	.run()

async function initBlogData() {
	const stmt = blogDB.prepare(`
      INSERT INTO blog VALUES (
         null,
         @title,
         @image,
		 @summary,
         @description,
         @creator
      )
   `)

	const insert = blogDB.transaction(post => {
		stmt.run(post)
	})

	for (const post of dummyPosts) {
		insert(post)
	}
}

async function initBooksData() {
	const stmt = booksDB.prepare(`
    INSERT INTO books VALUES (
         null,
         @subject,
         @creator,
		 @title,
         @publisher
      )
      `)

	const insert = booksDB.transaction(book => {
		stmt.run(book)
	})

	for (const book of dummyBooks) {
		insert(book)
	}
}

initBlogData()
initBooksData()
