'use client';

import { useState } from 'react';

export default function FullPoolishCalculator() {
	const [doughBallWeight, setDoughBallWeight] = useState(310);
	const [numberOfBalls, setNumberOfBalls] = useState(4);

	const HYDRATION = 0.68965517;
	const oliveOilAmount = 0.02068966;

	const totalDoughWeight = doughBallWeight * numberOfBalls;
	const totalFlour = totalDoughWeight / (1 + HYDRATION + oliveOilAmount);

	const percentages = {
		first: {
			flour: HYDRATION,
			water: HYDRATION,
			yeast: 0.00344828,
			honey: 0.00344828
		},
		second: {
			flour: 0.31034483,
			salt: oliveOilAmount,
			yeast: 0.00344828,
			oliveOil: oliveOilAmount
		}
	};

	const firstMixture = {
		flour: totalFlour * percentages.first.flour, // Assuming 55% of total flour is used in the first mixture
		water: totalFlour * percentages.first.water,
		yeast: totalFlour * percentages.first.yeast,
		honey: totalFlour * percentages.first.honey
	};

	const secondMixture = {
		flour: totalFlour * percentages.second.flour, // Assuming 45% of total flour is used in the second mixture
		salt: totalFlour * percentages.second.salt,
		yeast: totalFlour * percentages.second.yeast,
		oliveOil: totalFlour * percentages.second.oliveOil
	};

	//todo checkbox for switch to 5% - 10% sourdough in the main dough. and little yeast in poolish
	return (
		<div className='space-y-8'>
			<header>
				<h1 className='text-2xl md:text-6xl uppercase font-bold'>Pizza Dough Calculator</h1>
				<h2 className='text-md mt-0 mb-4 uppercase font-bold'>Recipe by Vito Iacopelli</h2>
			</header>

			<section className='grid md:flex gap-4 md:justify-between'>
				<form className='space-y-4'>
					<div>
						<label className='block text-base font-medium text-left'>Dough Ball Weight (g):</label>
						<input
							type='number'
							className='mt-1 p-2 w-full border rounded-md text-slate-900'
							value={doughBallWeight}
							onChange={(e) => setDoughBallWeight(e.target.value)}
						/>
					</div>

					<div>
						<label className='block text-base font-medium text-left'>Number of Dough Balls:</label>
						<input
							type='number'
							className='mt-1 p-2 w-full border rounded-md text-slate-900'
							value={numberOfBalls}
							onChange={(e) => setNumberOfBalls(e.target.value)}
						/>
					</div>
				</form>
				<aside>
					<h2 className='text-2xl font-semibold'>Ingredients:</h2>
					<ul>
						<li>{(firstMixture.flour + secondMixture.flour).toFixed(2)}g Flour</li>
						<li>{firstMixture.water.toFixed(2)}g Water</li>
						<li>{(firstMixture.yeast + secondMixture.yeast).toFixed(2)}g Yeast</li>
						<li>{firstMixture.honey.toFixed(2)}g Honey</li>
						<li>{secondMixture.salt.toFixed(2)}g Salt</li>
						<li>{secondMixture.oliveOil.toFixed(2)}g Olive Oil</li>
					</ul>
				</aside>
			</section>
			<section className='md:grid gap-10 grid-cols-3'>
				<h3 className='font-semibold text-xl md:text-3xl self-center'>
					Total Dough Weight: {totalDoughWeight}g
				</h3>
				<div className=''>
					<h3 className='text-lg font-semibold'>Poolish:</h3>
					<ul>
						<li>Flour: {firstMixture.flour.toFixed(2)}g</li>
						<li>Water: {firstMixture.water.toFixed(2)}g</li>
						<li>Yeast: {firstMixture.yeast.toFixed(2)}g</li>
						<li>Honey: {firstMixture.honey.toFixed(2)}g</li>
					</ul>
				</div>

				<div>
					<h3 className='text-lg font-semibold'>Second Mixture:</h3>
					<ul>
						<li>Flour: {secondMixture.flour.toFixed(2)}g</li>
						<li>Salt: {secondMixture.salt.toFixed(2)}g</li>
						<li>Yeast: {secondMixture.yeast.toFixed(2)}g</li>
						<li>Olive Oil: {secondMixture.oliveOil.toFixed(2)}g</li>
					</ul>
				</div>
			</section>
			<footer className='flex'>
				<a
					className='mx-auto transition-all text-yellow-600 duration-300 hover:text-slate-900 inline-block p-4 bg-transparent hover:bg-yellow-600 rounded-md'
					href='https://www.youtube.com/watch?v=xUEYRiZlyUM'
					target='_blank'
					rel='nofollow'
				>
					Instructions Video on Youtube
				</a>
			</footer>
		</div>
	);
}
