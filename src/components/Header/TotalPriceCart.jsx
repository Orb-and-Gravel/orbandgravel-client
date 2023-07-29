import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

export function TotalPriceCart() {
	return (
		<div className='bg-colorOne text-colorFive mt-2 p-2 rounded-md'>
			<div className='flex justify-between items-center'>
				<p className='text-colorFour'>Amount</p>
				<h3 className='font-bold text-xl text-colorFive'>PKR 500</h3>
			</div>
			<button className='flex gap-x-1 text-colorTwo bg-colorFour w-full items-center justify-center rounded-full py-2 text-sm tracking-wider'>
				CHECKOUT
				<ArrowLongRightIcon className='w-6' />
			</button>
		</div>
	);
}
