import React from 'react';
import { Avatar } from '@nextui-org/react';

import { siteConfig } from '@/config/site';

export default function App() {
	return (
		<div className='flex gap-4 items-center'>
			<Avatar isBordered color='default' src={siteConfig.profilePicture.KrzysztofBurnat} />
			<Avatar isBordered color='primary' src={siteConfig.profilePicture.TomaszStawarski} />
			<Avatar isBordered color='secondary' src={siteConfig.profilePicture.AnnaSzuba} />
			<Avatar isBordered color='success' src={siteConfig.profilePicture.BarbaraBatkoSzepielak} />
			<Avatar isBordered color='warning' src={siteConfig.profilePicture.AnetaKościk} />
			<Avatar isBordered color='danger' src={siteConfig.profilePicture.KatarzynaKornaus} />
		</div>
	);
}
