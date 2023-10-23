import FullPoolishCalculator from '@/components/FullPoolishCalculator';
/* import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function PizzaModel() {
	const gltf = useGLTF('/models/pizza.glb');
	return <primitive object={gltf.scene} />;
}
 */
export default function Home() {
	return (
		<main className='grid w-[100vw] h-[100vh] place-items-center'>
			<section className='container mx-auto max-w-4xl text-center'>
				{/* <Canvas style={{ position: 'absolute', zIndex: -1, top: 0, left: 0 }}>
					<ambientLight />
					<Suspense fallback={null}>
						<PizzaModel />
					</Suspense>
				</Canvas> */}
				<FullPoolishCalculator />
			</section>
		</main>
	);
}
