'use client';

import { useState } from 'react';

export default function FullPoolishCalculator() {
	const [doughBallWeight, setDoughBallWeight] = useState(280);
	const [numberOfBalls, setNumberOfBalls] = useState(9);

	const HYDRATION = 0.68965517;
	const oliveOilAmount = 0.02068966;

	const totalDoughWeight = doughBallWeight * numberOfBalls;
	// const totalFlour = totalDoughWeight * 0.64732143;
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

	return (
		<div className='space-y-4'>
			<h1 className='text-2xl'>Pizza Dough Calculator</h1>

			<div>
				<label className='block text-sm font-medium'>Dough Ball Weight (g):</label>
				<input
					type='number'
					className='mt-1 p-2 w-full border rounded-md text-slate-900'
					value={doughBallWeight}
					onChange={(e) => setDoughBallWeight(e.target.value)}
				/>
			</div>

			<div>
				<label className='block text-sm font-medium'>Number of Dough Balls:</label>
				<input
					type='number'
					className='mt-1 p-2 w-full border rounded-md text-slate-900'
					value={numberOfBalls}
					onChange={(e) => setNumberOfBalls(e.target.value)}
				/>
			</div>

			<div>
				<h2 className='text-lg'>Ingredients:</h2>
				<section className='grid gap-10'>
					<h3>Total Dough Weight: {totalDoughWeight}g</h3>
					<div className=''>
						<h3 className='text-md font-semibold'>First Mixture:</h3>
						<ul>
							<li>Flour: {firstMixture.flour.toFixed(2)}g</li>
							<li>Water: {firstMixture.water.toFixed(2)}g</li>
							<li>Yeast: {firstMixture.yeast.toFixed(2)}g</li>
							<li>Honey: {firstMixture.honey.toFixed(2)}g</li>
						</ul>
					</div>

					<div>
						<h3 className='text-md font-semibold'>Second Mixture:</h3>
						<ul>
							<li>Flour: {secondMixture.flour.toFixed(2)}g</li>
							<li>Salt: {secondMixture.salt.toFixed(2)}g</li>
							<li>Yeast: {secondMixture.yeast.toFixed(2)}g</li>
							<li>Olive Oil: {secondMixture.oliveOil.toFixed(2)}g</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
}
