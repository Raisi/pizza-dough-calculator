'use client';
import FullPoolishCalculator from '@/components/FullPoolishCalculator';
import { useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function PizzaModel() {
	const gltf = useGLTF('/models/pizza.glb');
	const mesh = gltf.scene;

	useFrame(({ clock }) => {
		mesh.rotation.y = clock.getElapsedTime() * 0.3;
	});

	return <primitive object={mesh} />;
}

export default function Home() {
	return (
		<main className='grid w-[100vw] h-[100vh] place-items-center'>
			<section className='container mx-auto max-w-4xl text-center'>
				<Canvas
					style={{
						position: 'absolute',
						zIndex: -1,
						top: '10vh',
						left: 0,
						width: '50vw',
						height: '90vh'
					}}
					camera={{
						type: 'perspective',
						zoom: 2, // Control the zoom level
						position: [10, 4, 10] // Set the initial position
					}}
				>
					<ambientLight />
					<Suspense fallback={null}>
						<PizzaModel />
					</Suspense>
				</Canvas>
				<FullPoolishCalculator />
			</section>
		</main>
	);
}
