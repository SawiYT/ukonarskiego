import { Button } from '@nextui-org/react';
import { title } from '@/components/primitives';
import ImagePicker from './image-picker';
import { AddPhoto } from '@/lib/photo-action';

export default function AddPhotoForm() {
	const variant = 'bordered';

	return (
		<form action={AddPhoto}>
			<h2 className={title()}>Nowe zdjecie</h2>
			<div key={variant} className='flex mt-10 flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
				<ImagePicker label='' name='photo' />
				<Button type='submit' color='default'>
					Opublikuj
				</Button>
			</div>
		</form>
	);
}
