import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { FacebookIcon } from '@/components/icons';
import Avatars from '@/components/avatars';

export default function Home() {
	return (
		<section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[75vh]'>
			<div className='inline-block max-w-lg text-center justify-center'>
				<h1 className={title({ size: 'lg' })}>Niepubliczne Liceum Ogólnokształcące&nbsp;</h1>
				<br />
				<h1 className={title({ color: 'violet' })}>„U Konarskiego”&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: 'mt-4' })}>
					Zapraszamy do naszej szkoły przy ulicy Szewskiej 7 - miejsca pełnego wiedzy i odkryć!
				</h2>
			</div>
			<div className='flex gap-3'>
				<Link
					href={siteConfig.links.blog}
					className={buttonStyles({ color: 'primary', radius: 'full', variant: 'shadow' })}>
					Aktualności
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: 'bordered', radius: 'full' })}
					href={siteConfig.links.facebook}>
					<FacebookIcon size={20} />
					Facebook
				</Link>
			</div>
			<div className=' flex m-10 gap-10'>
				<Avatars />
			</div>
		</section>
	);
}
