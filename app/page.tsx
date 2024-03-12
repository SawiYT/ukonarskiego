import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { FacebookIcon } from '@/components/icons';
import Avatars from '@/components/avatars';

export default function Home() {
	return (
		<section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[85vh]'>
			<div className=' inline-block p-5 md:p-0 max-w-lg text-center justify-center'>
				<h1 className={title({ size: 'lg' })}>
					Niepubliczne <br />
					Liceum Ogólnokształcące
				</h1>
				<br />
				<h1 className={title({ color: 'violet' })}>„U Konarskiego”&nbsp;</h1>
				<h2 className={' text-sm md:text-lg pt-5'}>
					Zapraszamy do naszej szkoły - miejsca pełnego wiedzy i odkryć! <br />
					<span className=' font-medium'>
						ul. Szewska 7 33-100 Tarnow tel. 798-001-620 <p>info@ukonarskiego.wiara.pl</p>
					</span>
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
