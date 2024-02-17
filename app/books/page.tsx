import { getBooks } from '@/lib/books';
import BookTable from './table';
import { title } from '@/components/primitives';

interface Book {
	subject: string;
	creator: string;
	title: string;
	publisher: string;
	class: string;
}

export default async function PricingPage() {
	const users = (await getBooks()) as Book[];

	return (
		<>
			<h2 className={title()}>Podreczniki</h2>
			<div className='m-20 md:m-0 md:pt-10'>
				<BookTable users={users} />
			</div>
		</>
	);
}
