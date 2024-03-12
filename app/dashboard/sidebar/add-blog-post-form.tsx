import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { title } from '@/components/primitives';
import ImagePicker from '../image-picker';
import { AddBlogPost, RemoveBlogPost } from '@/lib/post-action'; // Import your remove function

export default function AddBlogPostForm() {
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
				<form action={AddBlogPost}>
					<h2 className={title()}>Nowy post</h2>
					<div key={variant} className='flex mt-10 flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
						<Input type='text' name='title' isRequired variant={variant} label='Tytuł' placeholder='Tytuł dla posta' />
						<Input
							type='text'
							name='summary'
							isRequired
							variant={variant}
							label='Streszczenie'
							placeholder='Krótkie streszczenie'
						/>
						<Input
							type='text'
							name='description'
							isRequired
							variant={variant}
							label='Opis'
							placeholder='Dluższy opis'
						/>
						<Input type='text' name='creator' isRequired variant={variant} label='Autor' placeholder='Autor posta' />
						<ImagePicker label='' name='image' />
						<div className='p-2'>
							<Button className='m-2' type='submit' color='default'>
								Opublikuj
							</Button>
							<Button onClick={handleShowDeleteForm} color='danger'>
								Usuń post
							</Button>
						</div>
					</div>
				</form>
			) : (
				<form action={RemoveBlogPost}>
					<h2 className={title()}>Usuń post</h2>
					<div key={variant} className='flex mt-10 flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
						<Input type='text' name='id' isRequired variant={variant} label='ID Posta' placeholder='ID Posta' />
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
