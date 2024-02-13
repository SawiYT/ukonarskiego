import Link from 'next/link';
import Image from 'next/image';

interface BlogItemProps {
	title: string;
	slug: string;
	image: string;
	description: string;
	creator: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ title, slug, image, description, creator }) => {
	return (
		<article className=' w-96 rounded-lg border border-gray-600 overflow-hidden shadow-md m-4 p-6'>
			<header className='mb-4'>
				<div className='mb-4'>
					<Image src={image} alt={title} width={300} height={200} objectFit='cover' className='rounded-md' />
				</div>
				<div>
					<h2 className=' text-2xl font-bold'>{title}</h2>
					<p className=''>by {creator}</p>
				</div>
			</header>
			<div>
				<p className=''>{description}</p>
				<div className='mt-4'>
					<Link className=' font-semibold' href={`/post/${slug}`}>
						Read More
					</Link>
				</div>
			</div>
		</article>
	);
};

export default BlogItem;
