import PhotoGrid from '@/components/photo-grid';
import { title } from '@/components/primitives';
import { getPhotos } from '@/lib/photos';

interface Photo {
	id: string;
	image: string;
}

export default async function PhotoPage() {
	const photos = (await getPhotos()) as Photo[];

	return (
		<div className='flex flex-col justify-center items-center'>
			<h2 className={title()}>Galeria</h2>
			<PhotoGrid photos={photos} />
		</div>
	);
}
