export default function PricingLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className='flex flex-col overflow-x-hidden items-center justify-center gap-4 py-8 md:py-10'>
			<div className='inline-block max-w-[33rem] text-center justify-center'>{children}</div>
		</section>
	);
}
