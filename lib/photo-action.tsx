'use server';

import { redirect } from 'next/navigation';
import { savePhoto } from './photos';
import { revalidatePath } from 'next/cache';

export async function AddPhoto(formData: FormData): Promise<void> {
	const photo = {
		image: formData.get('photo'),
	};

	await savePhoto(photo);
	revalidatePath('/photos');
	redirect('/photos');
}
