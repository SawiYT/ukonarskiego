import React from 'react';
import PhotoItem from './photo-item';

interface PhotoGridProps {
	photos: Array<{
		id: string;
		image: string;
	}>;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-2 lg:gap-4 xl:gap-8 max-w-lg mx-auto'>
			{photos.map(photo => (
				<li key={photo.id}>
					<PhotoItem id={photo.id} image={photo.image} />
				</li>
			))}
		</ul>
	);
};

export default PhotoGrid;
