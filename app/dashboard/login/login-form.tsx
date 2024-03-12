'use client';

// Login.tsx
import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { title } from '@/components/primitives';
import { handleLogin } from '../../../lib/login-util'; // Replace with the actual path

interface LoginProps {
	setLoggedIn: (isLoggedIn: boolean) => void;
}

export default function Login({ setLoggedIn }: LoginProps) {
	const variant = 'bordered';
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { success } = await handleLogin(login, password);

		if (success) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2 className={title()}>Zaloguj się</h2>
			<div className='flex mt-10 flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
				<Input
					type='text'
					name='login'
					isRequired
					variant={variant}
					label='Login'
					value={login}
					onChange={e => setLogin(e.target.value)}
				/>
				<Input
					type='password'
					name='password'
					isRequired
					variant={variant}
					label='Hasło'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<Button type='submit' color='default'>
					Zaloguj
				</Button>
			</div>
		</form>
	);
}
