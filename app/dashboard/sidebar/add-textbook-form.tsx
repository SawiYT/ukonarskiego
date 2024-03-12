import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { title } from '@/components/primitives';
import { AddTextBook, RemoveTextBook } from '@/lib/book-action';
import React, { useState } from 'react';

export default function AddTextBookForm() {
	const [showForm, switchForm] = useState(false);
	const variant = 'bordered';

	const handleShowDeleteForm = () => {
		switchForm(true);
	};

	const handleCancelDelete = () => {
		switchForm(false);
	};

	return (
		<div>
			{!showForm ? (
				<form action={AddTextBook}>
					<h2 className={title()}>Nowy post</h2>
					<div key={variant} className='flex mt-10 flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
						<Input
							type='text'
							name='subject'
							isRequired
							variant={variant}
							label='Przedmiot'
							placeholder='Np. J.Polski'
						/>
						<Input
							type='text'
							name='creator'
							isRequired
							variant={variant}
							label='Autor/Autorzy'
							placeholder='Twórcy ksiazki'
						/>
						<Input type='text' name='title' isRequired variant={variant} label='Tytul' placeholder='Tytul ksiazki' />
						<Input
							type='text'
							name='publisher'
							isRequired
							variant={variant}
							label='Wydawca'
							placeholder='Np. Nowa Era'
						/>
						<Input type='text' name='class' isRequired variant={variant} label='Klasa' placeholder='1/2/3/4' />
						<Button type='submit' color='default'>
							Opublikuj
						</Button>
						<Button onClick={handleShowDeleteForm} color='danger'>
							Usuń ksiazke
						</Button>
					</div>
				</form>
			) : (
				<form action={RemoveTextBook}>
					<h2 className={title()}>Usuń ksiazke</h2>
					<div key={variant} className='flex mt-10 flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
						<Input type='text' name='id' isRequired variant={variant} label='ID ksiazki' placeholder='ID Posta' />
						<Button type='submit' color='danger'>
							Potwierdź usunięcie
						</Button>
						<Button onClick={handleCancelDelete} color='default'>
							Anuluj
						</Button>
					</div>
				</form>
			)}
		</div>
	);
}
