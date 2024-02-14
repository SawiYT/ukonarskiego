import { title } from '@/components/primitives';
import { getPosts } from '@/lib/blog';
import BlogGrid from '@/components/blog-grid';

interface BlogPost {
	id: number;
	title: string;
	slug: string;
	image: string;
	summary: string;
	description: string;
	creator: string;
}

export default async function BlogPage() {
	const posts = (await getPosts()) as BlogPost[];

	return (
		<>
			<div className='mb-10'>
				<h2 className={title()}>Blog</h2>
			</div>
			<main>
				<BlogGrid posts={posts} />
			</main>
		</>
	);
}
