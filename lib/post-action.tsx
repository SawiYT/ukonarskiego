'use server';

import { savePost } from './blog';

export async function AddBlogPost(formData: FormData): Promise<void> {
	const post = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		description: formData.get('description'),
		creator: formData.get('creator'),
		image: formData.get('image'),
	};

	await savePost(post);
}
