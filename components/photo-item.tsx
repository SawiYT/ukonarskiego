import { Image } from '@nextui-org/react';

interface PhotoItem {
	id: string;
	image: string;
}

const PhotoItem: React.FC<PhotoItem> = ({ id, image }) => {
	return (
		<>
			<a
				className='relative'
				target='_blank'
				rel='noopener noreferrer'
				href={`https://ukonarskiego.s3.eu-central-1.amazonaws.com/${image}`}>
				<p className='absolute z-50 p-2 top-0 bottom-0 text-orange-500 font-bold text-lg '> {id} </p>

				<Image
					alt='School photo'
					className='object-cover rounded-xl flex-grow h-48'
					src={`https://ukonarskiego.s3.eu-central-1.amazonaws.com/${image}`}
					width={270}
				/>
			</a>
		</>
	);
};

export default PhotoItem;
