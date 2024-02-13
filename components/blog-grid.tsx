import React from 'react';
import BlogItem from './blog-item';

interface BlogGridProps {
	posts: Array<{
		id: number;
		title: string;
		slug: string;
		image: string;
		description: string;
		creator: string;
	}>;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
			{posts.map(post => (
				<li key={post.id}>
					<BlogItem {...post} />
				</li>
			))}
		</ul>
	);
};

export default BlogGrid;
