'use server';

import { redirect } from 'next/navigation';
import { savePost } from './blog';
import { revalidatePath } from 'next/cache';

export async function AddBlogPost(formData: FormData): Promise<void> {
	const post = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		description: formData.get('description'),
		creator: formData.get('creator'),
		image: formData.get('image'),
	};

	await savePost(post);
	revalidatePath('/blog');
	redirect('/blog');
}
