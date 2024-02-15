'use server'

import { saveBook } from './books'

export async function AddTextBook(formData: FormData): Promise<void> {
	const book = {
		subject: formData.get('subject'),
		creator: formData.get('creator'),
		title: formData.get('title'),
		publisher: formData.get('publisher'),
	}
	saveBook(book)
}
