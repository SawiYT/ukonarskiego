import { Button } from '@nextui-org/react';
import { title } from '@/components/primitives';
import { Input } from '@nextui-org/react';
import { AccountRegistration } from '@/lib/create-account-action';

export default function CreateAccount() {
	const variant = 'bordered';

	return (
		<form action={AccountRegistration}>
			<h2 className={title()}>Nowe konto</h2>
			<div key={variant} className='flex mt-10 flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
				<Input type='text' name='login' isRequired variant={variant} label='Login' />
				<Input type='text' name='password' isRequired variant={variant} label='Haslo' />
				<Button type='submit' color='default'>
					Utworz konto
				</Button>
			</div>
		</form>
	);
}
