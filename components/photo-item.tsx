'use client';

import { Image } from '@nextui-org/react';

interface PhotoItem {
	image: string;
}

const PhotoItem: React.FC<PhotoItem> = ({ image }) => {
	return (
		<>
			<a href={image}>
				<Image alt='School photo' className='object-cover rounded-xl flex-grow h-48' src={image} width={270} />
			</a>
		</>
	);
};

export default PhotoItem;
