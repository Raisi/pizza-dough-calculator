'use client';
import FullPoolishCalculator from '@/components/FullPoolishCalculator';
import { useState, Suspense, useEffect, useRef } from 'react';
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

function CameraController() {
	const mouse = useRef({ x: 0, y: 0 });
	const clock = useRef(0);

	useEffect(() => {
		const handleMouseMove = (event) => {
			mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useFrame(({ camera }) => {
		clock.current += 0.01;

		// Dynamic rotation based on mouse position
		const rotationSpeedX = mouse.current.x * 0.1;
		const rotationSpeedY = mouse.current.y * 0.01;
		// camera.position.x = 10 * Math.sin(clock.current * rotationSpeedX);
		camera.position.y = 4 + 4 * Math.sin(clock.current * 0.3);
		// camera.position.z = 10 * Math.cos(clock.current * rotationSpeedY);

		camera.lookAt(5, 2, 0);
	});

	return null;
}

export default function Home() {
	return (
		<main className='grid w-[100vw] h-[100vh] place-items-center'>
			<section className='container mx-auto max-w-4xl md:text-center px-2'>
				<Canvas
					className='hidden md:block'
					style={{
						position: 'absolute',
						zIndex: -1,
						top: '0',
						left: 0,
						width: '100vw',
						height: '100vh'
					}}
					camera={{
						type: 'perspective',
						zoom: 2, // Control the zoom level
						position: [10, 4, 10] // Set the initial position
					}}
				>
					<CameraController />
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
