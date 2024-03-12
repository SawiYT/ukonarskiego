import sql from 'better-sqlite3';
import fs from 'node:fs';
import { S3 } from '@aws-sdk/client-s3';

const db = sql('photos.db');
const s3 = new S3({
	region: 'eu-central-1',
});

export function getPhotos() {
	return db.prepare('SELECT * FROM photos').all();
}

export function removePhotoById(id: number) {
	const photo = db.prepare('SELECT * FROM photos WHERE id = ?').get(id) as { id: number; title: string };

	if (!photo) {
		console.error(`Photo with id ${id} not found.`);
		return;
	}

	db.prepare('DELETE FROM photos WHERE id = ?').run(id);

	s3.deleteObject({
		Bucket: 'ukonarskiego',
		Key: photo?.title,
	});
}

export async function savePhoto(photo: any) {
	const extension = photo.image.name.split('.').pop();
	const fileName = `${photo.title}.${extension}`;

	const bufferedImage = await photo.image.arrayBuffer();

	s3.putObject({
		Bucket: 'ukonarskiego',
		Key: fileName,
		Body: Buffer.from(bufferedImage),
		ContentType: photo.image.type,
	});

	photo.image = fileName;

	db.prepare(
		`
	INSERT INTO photos (title, image) VALUES (
			@title,
			@image	
	)
	`
	).run(photo);
}
