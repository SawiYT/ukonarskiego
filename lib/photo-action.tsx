'use server';

import { redirect } from 'next/navigation';
import { removePhotoById, savePhoto } from './photos';
import { revalidatePath } from 'next/cache';

export async function AddPhoto(formData: FormData): Promise<void> {
	const photo = {
		title: formData.get('title'),
		image: formData.get('image'),
	};

	await savePhoto(photo);
	revalidatePath('/photos');
	redirect('/photos');
}

export async function RemovePhoto(formData: FormData): Promise<void> {
	const photo = {
		id: formData.get('id'),
	};
	const photoId = parseInt(photo.id as string, 10);
	await removePhotoById(photoId);
	revalidatePath('/photos');
	redirect('/photos');
}
