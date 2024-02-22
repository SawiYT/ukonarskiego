const sql = require('better-sqlite3');
const booksDB = sql('books.db');
const blogDB = sql('blog.db');
const photosDB = sql('photos.db');
const accountsDB = sql('accounts.db');

const dummyPosts = [
	{
		title: 'Rozwijamy pasje uczniów',
		image: 'dummyimage.jpeg',
		summary: 'Wierzymy w was!',
		description:
			'Odkrywamy talenty naszych uczniów! Nasza szkoła nie tylko naucza, lecz również inspiruje do rozwijania pasji. Przykładem jest ta strona internetowa, stworzona przez jednego z uczniów, na której obecnie się znajdujecie.',
		creator: 'SilentStudent',
	},
	{
		title: 'Nasz klub szachowy',
		image: 'dummychess.jpg',
		summary: 'Posiadamy wlasny klub szachowy!',
		description:
			'Zapraszamy do uczestnictwa w naszym klubie, gdzie rozwijamy umiejętności szachowe i budujemy społeczność pasjonatów tej fascynującej gry.',
		creator: 'TwórcaKlubuSzachowego',
	},
];

const dummyPhotos = [
	{
		title: 'stawar',
		image: 'stawar.jpg',
	},
	{
		title: 'burnat',
		image: 'burnat.jpg',
	},
];

const dummyBooks = [
	{
		subject: 'J.POLSKI',
		creator: `M. Chmiel, A. Cisowska, J. Kościerzyńska, H. Kusy, A. Wróblewska`,
		title: 'Active',
		publisher: 'Nowa Era',
		class: '1',
	},
	{
		subject: 'J. ANGIELSKI',
		creator: `M. Chmiel, A. Cisowska, J. Kościerzyńska, H. Kusy, A. Wróblewska`,
		title: 'Active',
		publisher: 'Nowa Era',
		class: '1',
	},
];

booksDB
	.prepare(
		`
   CREATE TABLE IF NOT EXISTS books (
       key INTEGER PRIMARY KEY AUTOINCREMENT,
       subject TEXT,
       creator TEXT,
       title TEXT,
       publisher TEXT,
	   class TEXT NOT NULL
   )
   `
	)
	.run();

photosDB
	.prepare(
		`
	CREATE TABLE IF NOT EXISTS photos (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title TEXT NOT NULL,
		image TEXT NOT NULL
	)
`
	)
	.run();

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
	.run();

accountsDB
	.prepare(
		`
   CREATE TABLE IF NOT EXISTS accounts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       login TEXT NOT NULL,
       password TEXT NOT NULL
    )
`
	)
	.run();

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
   `);

	const insert = blogDB.transaction(post => {
		stmt.run(post);
	});

	for (const post of dummyPosts) {
		insert(post);
	}
}

async function initPhotosData() {
	const stmt = photosDB.prepare(`
      INSERT INTO photos VALUES (
         null,
		 @title,
         @image
      )
   `);

	const insert = photosDB.transaction(photo => {
		stmt.run(photo);
	});

	for (const photo of dummyPhotos) {
		insert(photo);
	}
}

async function initBooksData() {
	const stmt = booksDB.prepare(`
    INSERT INTO books VALUES (
         null,
         @subject,
         @creator,
		 @title,
         @publisher,
		 @class
      )
      `);

	const insert = booksDB.transaction(book => {
		stmt.run(book);
	});

	for (const book of dummyBooks) {
		insert(book);
	}
}

initBlogData();
initPhotosData();
initBooksData();
