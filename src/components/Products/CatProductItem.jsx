import React, { useState } from 'react';
import { Rating } from '../Rating/Rating';

const images = [
	'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export function CatProductItem() {
	const [colorVariant, setColorVariant] = useState(0);

	return (
		<div className='max-w-sm relative'>
			<div className='absolute top-4 left-4 z-10'>
				<ColorCatProduct
					setColorVariant={setColorVariant}
					colorVariant={colorVariant}
				/>
			</div>
			<a href='/single-product'>
				<img
					src={images[colorVariant]}
					alt=''
					className='object-cover rounded-2xl h-96'
				/>
				<span className='flex justify-between mt-3'>
					<p className='text-lg font-medium text-colorFive'>
						Nova Bliss Necklace
					</p>
					<h6 className='text-2xl text-colorThree font-bold'>PKR 3000</h6>
				</span>
			</a>
			<div className='w-36'>
				<Rating />
			</div>
		</div>
	);
}

function ColorCatProduct({ setColorVariant, colorVariant }) {
	return (
		<div className='flex gap-x-2'>
			<button
				className={`h-4 w-4 bg-colorThree rounded-full ${
					colorVariant === 0 &&
					'outline-1 outline-offset-2 outline-colorFour outline'
				}`}
				onClick={() => setColorVariant(0)}
			></button>
			<button
				className={`h-4 w-4 bg-colorFive rounded-full ${
					colorVariant === 1 &&
					'outline-1 outline-offset-2 outline-colorFour outline'
				}`}
				onClick={() => setColorVariant(1)}
			></button>
			<button
				className={`h-4 w-4 bg-colorTwo rounded-full ${
					colorVariant === 2 &&
					'outline-1 outline-offset-2 outline-colorFour outline'
				}`}
				onClick={() => setColorVariant(2)}
			></button>
		</div>
	);
}
