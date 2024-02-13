import { Input } from '@/components/input';
import { shareApplication } from '@/lib/actions';
import { Button } from '@nextui-org/react';

export default function AboutPage() {
	return (
		<div className='p-8'>
			<h1 className={'text-4xl font-bold mb-10'}>Rekrutacja</h1>

			<form action={shareApplication} className='max-w-md mx-auto grid grid-cols-2 gap-4'>
				<Input label='Pierwsze imię' type='text' id='name' />
				<Input label='Drugie imię' type='text' id='secondname' />
				<Input label='Nazwisko' type='text' id='surname' />
				<Input label='Data urodzenia' type='date' id='dateofbirth' />
				<Input label='Miejsce urodzenia' type='text' id='placeofbirth' />
				<Input label='Pesel' type='text' id='pesel' />
				<Input label='Imię i nazwisko ojca / opiekuna' type='text' id='fathersname' />
				<Input label='Imię i nazwisko matki / opiekuna' type='text' id='mothersname' />
				<Input
					label='Miejsce zameldowania ucznia – kod pocztowy, miejscowość, ulica, nr domu/lokalu'
					type='text'
					id='residence'
				/>
				<Input
					label='Miejsce zamieszkania – kod pocztowy, miejscowość, ulica, nr domu/lokalu (jezeli jest inne)'
					type='text'
					id='domicile'
				/>
				<Input label='Telefon do rodzica / opiekuna' type='text' id='parentsnumber' />
				<Input label='Telefon do kandydata szkol.' type='text' id='studentsnumber' />

				<Input label='Email do rodzica / opiekuna' type='text' id='parentsemail' />

				<Input label='Email do kandydata szkol. ' type='text' id='studentsemail' />
				<div className='col-span-2 flex justify-end'>
					<Button
						type='submit'
						className='bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]  text-white font-bold py-2 px-4'>
						Wyślij Formularz
					</Button>
				</div>
			</form>
		</div>
	);
}
