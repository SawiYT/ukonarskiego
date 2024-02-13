import { title } from '@/components/primitives';
import { getPost } from '@/lib/blog';
import BlogGrid from '@/components/blog-grid';

interface BlogPost {
	id: number;
	title: string;
	slug: string;
	image: string;
	description: string;
	creator: string;
}

export default async function BlogPage() {
	const posts = (await getPost()) as BlogPost[];

	return (
		<>
			<div>
				<h1 className={title()}>Blog</h1>
			</div>
			<main>
				<BlogGrid posts={posts} />
			</main>
		</>
	);
}
