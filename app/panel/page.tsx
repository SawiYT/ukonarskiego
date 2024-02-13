import Link from 'next/link';

export default function DocsPage() {
	return (
		<div className='flex items-center justify-center h-[60vh]'>
			<div className='bg-gray-200 p-8 rounded-xl shadow-md'>
				<h1 className='text-2xl text-black font-bold mb-6'>Wybierz opcję:</h1>
				<div className='flex flex-col gap-4'>
					<Link href={'/panel/dodaj_podrecznik'} className='bg-blue-500 text-black font-semibold py-2 px-4 rounded'>
						Dodaj podręcznik
					</Link>
					<Link href={'/panel/dodaj_wpis'} className='bg-green-500 text-black font-semibold py-2 px-4 rounded'>
						Dodaj wpis do bloga
					</Link>
				</div>
			</div>
		</div>
	);
}
