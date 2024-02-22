import sql from 'better-sqlite3';
import bcrypt from 'bcrypt';

const db = sql('accounts.db');

interface Account {
	login: string;
	password: string;
}

export function getAccounts(): Account[] {
	return db.prepare('SELECT * FROM accounts').all() as Account[];
}

export async function findAccount(login: string, password: string): Promise<Account | null | string> {
	const user = getAccounts().find(user => user.login === login);

	if (user) {
		const passwordMatch = await bcrypt.compare(password, user.password);

		if (passwordMatch) {
			// Password is correct
			return user; // You can return the user object or any other relevant data
		} else {
			console.log('Password incorrect');
			return null;
		}
	} else {
		console.log('User not found');
		return null;
	}
}

export async function createAccount(login: string, password: string): Promise<Account | null> {
	const existingUser = db.prepare('SELECT * FROM accounts WHERE login = ?').get(login);

	if (existingUser) {
		return null;
	}

	const hashedPassword = await bcrypt.hash(password, 12);

	db.prepare('INSERT INTO accounts (login, password) VALUES (?, ?)').run(login, hashedPassword);

	return null;
}
