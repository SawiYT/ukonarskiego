const sql = require('better-sqlite3');
const db = sql('books.db');

const dummyBooks = [
	{
		key: '1',
		subject: 'J.POLSKI',
		creator: `M. Chmiel, A.
        Cisowska, J.
        Kościerzyńska, H. Kusy,
        A. Wróblewska
        `,
		title: 'Active',
		publisher: 'Nowa Era',
	},
	{
		key: '2',
		subject: 'J. ANGIELSKI ',
		creator: `M. Chmiel, A.
        Cisowska, J.
        Kościerzyńska, H. Kusy,
        A. Wróblewska
        `,
		title: 'Active',
		publisher: 'Nowa Era',
	},
];

db.prepare(
	`
   CREATE TABLE IF NOT EXISTS books (
       key INTEGER PRIMARY KEY AUTOINCREMENT,
       subject TEXT,
       creator TEXT,
       title TEXT,
       publisher TEXT
    )
`
).run();

async function initData() {
	const stmt = db.prepare(`
      INSERT INTO books VALUES (
         null,
         @subject,
         @creator,
		 @title,
         @publisher
      )
   `);

	for (const book of dummyBooks) {
		stmt.run(book);
	}
}

initData();
