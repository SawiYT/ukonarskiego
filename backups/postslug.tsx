import { getPost } from '@/lib/blog'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Post {
	title: string
	creator: string
	description: string
	image: string
	// Dodaj inne pola, jeśli istnieją
}

interface PageProps {
	params: {
		postSlug: string
	}
}

export default function Page({ params }: PageProps) {
	const post = getPost(params.postSlug) as Post

	if (!post) {
		notFound()
	}

	return (
		<header className='flex flex-col justify-center items-center p-8'>
			<div className='mb-4'>
				<Image width={300} height={200} objectFit='cover' src={post.image} alt={post.title}></Image>
			</div>
			<div>
				<h1 className='text-4xl font-bold mb-2'>{post.title}</h1>
				<p className=' mb-4'>by {post.creator}</p>
				<p className='text-lg'>{post.description}</p>
			</div>
		</header>
	)
}
