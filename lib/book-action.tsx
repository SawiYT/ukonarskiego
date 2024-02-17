'use server';

import { redirect } from 'next/navigation';
import { saveBook } from './books';
import { revalidatePath } from 'next/cache';

export async function AddTextBook(formData: FormData): Promise<void> {
	const book = {
		subject: formData.get('subject'),
		creator: formData.get('creator'),
		title: formData.get('title'),
		publisher: formData.get('publisher'),
		class: formData.get('class'),
	};
	saveBook(book);
	revalidatePath('/books');
	redirect('/books');
}
