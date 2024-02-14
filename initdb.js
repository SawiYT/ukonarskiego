const sql = require('better-sqlite3');
const db = sql('blog.db');

const dummyMeals = [
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
];

db.prepare(
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
).run();

async function initData() {
	const stmt = db.prepare(`
      INSERT INTO blog VALUES (
         null,
         @title,
         @image,
		 @summary,
         @description,
         @creator
      )
   `);

	for (const meal of dummyMeals) {
		stmt.run(meal);
	}
}

initData();
