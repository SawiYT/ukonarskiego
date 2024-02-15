import { getBooks } from '@/lib/books'
import BookTable from './table'

export default async function PricingPage() {
	const users = await getBooks()

	return <BookTable users={users} />
}
