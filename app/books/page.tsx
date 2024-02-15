import { getBooks } from '@/lib/books';
import BookTable from './table';

export default async function PricingPage() {
	<h1>e</h1>;
	const users = await getBooks();

	<BookTable users={users} />;
}
