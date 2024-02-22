'use client';

import { Image } from '@nextui-org/react';

interface PhotoItem {
	image: string;
}

const PhotoItem: React.FC<PhotoItem> = ({ image }) => {
	return (
		<>
			<a target='_blank' href={`https://ukonarskiego.s3.eu-central-1.amazonaws.com/${image}`}>
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
