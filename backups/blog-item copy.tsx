import Link from 'next/link'
import Image from 'next/image'

interface BlogItemProps {
	title: string
	slug: string
	image: string
	summary: string
	creator: string
}

const BlogItem: React.FC<BlogItemProps> = ({ title, slug, image, summary, creator }) => {
	return (
		<article className='mx-auto w-72 h-96 justify-center items-center rounded-lg border border-gray-600 overflow-hidden shadow-md m-4 p-6'>
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
				<p className=''>{summary}</p>
				<div className='mt-4'>
					<Link className=' font-semibold' href={`/blog/${slug}`}>
						Zobacz caly artykul
					</Link>
				</div>
			</div>
		</article>
	)
}

export default BlogItem
