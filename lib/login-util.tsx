'use server';

import { findAccount } from '@/lib/login'; // Replace with the actual path

interface LoginResult {
	success: boolean;
}

export async function handleLogin(login: string, password: string): Promise<LoginResult> {
	try {
		const result = await findAccount(login, password);

		if (result) {
			return { success: true };
		} else {
			return { success: false };
		}
	} catch (error) {
		console.error('An error occurred during login:', error);
		return { success: false };
	}
}
