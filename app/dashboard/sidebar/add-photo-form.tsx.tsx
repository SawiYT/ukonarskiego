import { Button } from '@nextui-org/react';
import { title } from '@/components/primitives';
import ImagePicker from '../image-picker';
import { AddPhoto, RemovePhoto } from '@/lib/photo-action';
import { Input } from '@nextui-org/react';
import React, { useState } from 'react';

export default function AddPhotoForm() {
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
				<form action={AddPhoto}>
					<h2 className={title()}>Nowe zdjecie</h2>
					<div key={variant} className='flex mt-10 flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
						<Input type='text' name='title' isRequired variant={variant} label='Tytul' />
						<ImagePicker label='' name='image' />
						<Button type='submit' color='default'>
							Opublikuj
						</Button>
						<Button onClick={handleShowDeleteForm} color='danger'>
							Usuń zdjecie
						</Button>
					</div>
				</form>
			) : (
				<form action={RemovePhoto}>
					<h2 className={title()}>Usuń zdjecie</h2>
					<div key={variant} className='flex mt-10 flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
						<Input type='text' name='id' isRequired variant={variant} label='ID zdjecia' placeholder='ID Posta' />
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
