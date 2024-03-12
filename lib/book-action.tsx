'use server';

import { redirect } from 'next/navigation';
import { removeBookById, saveBook } from './books';
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

export async function RemoveTextBook(formData: FormData): Promise<void> {
	const book = {
		key: formData.get('id'),
	};
	const bookKey = parseInt(book.key as string, 10);
	await removeBookById(bookKey);
	revalidatePath('/books');
	redirect('/books');
}
