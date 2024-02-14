import React from 'react';
import BlogItem from './blog-item';

interface BlogGridProps {
	posts: Array<{
		id: number;
		title: string;
		slug: string;
		image: string;
		summary: string;
		description: string;
		creator: string;
	}>;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-2 lg:gap-4 xl:gap-8 max-w-lg mx-auto'>
			{posts.map(post => (
				<li key={post.id} className=''>
					<BlogItem {...post} />
				</li>
			))}
		</ul>
	);
};

export default BlogGrid;
