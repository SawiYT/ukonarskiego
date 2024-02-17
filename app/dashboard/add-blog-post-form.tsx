import { Input } from '@nextui-org/react';
import ImagePicker from './image-picker';
import { AddBlogPost } from '@/lib/post-action';
import { Button } from '@nextui-org/react';
import { title } from '@/components/primitives';

export default function AddBlogPostForm() {
	const variant = 'bordered';

	return (
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
				<Input type='text' name='description' isRequired variant={variant} label='Opis' placeholder='Dluższy opis' />
				<Input type='text' name='creator' isRequired variant={variant} label='Autor' placeholder='Autor posta' />
				<ImagePicker label='' name='image' />
				<Button type='submit' color='default'>
					Opublikuj
				</Button>
			</div>
		</form>
	);
}
