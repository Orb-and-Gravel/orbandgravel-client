import React from 'react';
import { Rating } from '../Rating/Rating';

export function CatProductItem() {
	return (
		<div className='w-96 relative'>
			<div className='absolute top-4 left-4'>
				<ColorCatProduct />
			</div>
			<img
				src='https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt=''
				className='object-cover rounded-2xl h-96'
			/>
			<span className='flex justify-between mt-3'>
				<p className='text-lg font-medium text-colorFive'>
					Nova Bliss Necklace
				</p>
				<h6 className='text-2xl text-colorThree font-bold'>PKR 3000</h6>
			</span>
			<div className='w-36'>
				<Rating />
			</div>
		</div>
	);
}

function ColorCatProduct() {
	return (
		<div className='flex gap-x-2'>
			<button className='h-4 w-4 bg-colorThree rounded-full'></button>
			<div className='h-4 w-4 bg-colorFive rounded-full'></div>
			<div className='h-4 w-4 bg-colorOne rounded-full'></div>
		</div>
	);
}
