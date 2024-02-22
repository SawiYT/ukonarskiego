'use server';

import { redirect } from 'next/navigation';
import { savePhoto } from './photos';
import { revalidatePath } from 'next/cache';

export async function AddPhoto(formData: FormData): Promise<void> {
	const photo = {
		title: formData.get('title'),
		image: formData.get('image')
	};

	await savePhoto(photo);
	revalidatePath('/photos');
	redirect('/photos');
}
