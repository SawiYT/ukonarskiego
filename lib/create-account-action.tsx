'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createAccount } from './login';

export async function AccountRegistration(formData: FormData): Promise<void> {
	const account = {
		login: formData.get('login') as string,
		password: formData.get('password') as string,
	};

	await createAccount(account.login, account.password);
	revalidatePath('/books');
	redirect('/books');
}
