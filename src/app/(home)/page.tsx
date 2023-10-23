import FullPoolishCalculator from '@/components/FullPoolishCalculator';

export default function Home() {
	return (
		<main className='grid w-[100vw] h-[100vh] place-items-center'>
			<section className='container mx-auto max-w-4xl text-center'>
				<FullPoolishCalculator />
			</section>
		</main>
	);
}
