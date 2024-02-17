import sql from 'better-sqlite3';
import fs from 'node:fs';

const db = sql('photos.db');

export function getPhotos() {
	return db.prepare('SELECT * FROM photos').all();
}

export async function savePhoto(photo: any) {
	const extension = photo.image.name.split('.').pop();
	const fileName = `${photo.title}.${extension}`;

	const stream = fs.createWriteStream(`public/school-photos/${fileName}`);
	const bufferedImage = await photo.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), error => {
		if (error) {
			throw new Error('Saving image failded!');
		}
	});

	photo.image = `/school-photos/${fileName}`;

	db.prepare(
		`
	INSERT INTO photos (image) VALUES (
			@image	
	)
	`
	).run(photo);
}
