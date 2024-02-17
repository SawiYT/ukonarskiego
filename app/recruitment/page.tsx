import { Input } from '@nextui-org/react';
import { title } from '@/components/primitives';
import { shareApplication } from '@/lib/recruitment-actions';
import { Button } from '@nextui-org/react';

export default function AboutPage() {
	const variant = 'bordered';
	return (
		<div className='p-8'>
			<h2 className={title()}>Rekrutacja</h2>

			<form action={shareApplication} className='max-w-md pt-10 mx-auto grid grid-cols-2 gap-4'>
				<Input label='Pierwsze imię' variant={variant} isRequired type='text' name='name' />
				<Input label='Drugie imię' variant={variant} isRequired type='text' name='secondname' />
				<Input label='Nazwisko' variant={variant} isRequired type='text' name='surname' />
				<Input label='Data urodzenia' variant={variant} isRequired type='date' name='dateofbirth' placeholder='.' />
				<Input label='Miejsce urodzenia' variant={variant} isRequired type='text' name='placeofbirth' />
				<Input label='Pesel' type='text' variant={variant} isRequired name='pesel' />
				<Input label='Imię i nazwisko ojca' variant={variant} isRequired type='text' name='fathersname' />
				<Input label='Imię i nazwisko matki' variant={variant} isRequired type='text' name='mothersname' />
				<Input label='Miejsce zameldowania ucznia' variant={variant} type='text' isRequired name='residence' />
				<Input
					label='Miejsce zamieszkania (jezeli jest inne)'
					variant={variant}
					type='text'
					isRequired
					name='domicile'
				/>
				<Input label='Telefon do rodzica' variant={variant} isRequired type='text' name='parentsnumber' />
				<Input label='Telefon do kandydata' variant={variant} isRequired type='text' name='studentsnumber' />

				<Input label='Email do rodzica' variant={variant} isRequired type='text' name='parentsemail' />

				<Input label='Email do kandydata ' variant={variant} isRequired type='text' name='studentsemail' />
				<div className='col-span-2 flex justify-end'>
					<Button type='submit' color='default'>
						Wyślij Formularz
					</Button>
				</div>
			</form>
		</div>
	);
}
