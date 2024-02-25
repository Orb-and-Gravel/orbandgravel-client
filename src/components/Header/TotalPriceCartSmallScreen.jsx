import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

export function TotalPriceCartSmallScreen() {
	return (
		<div className='grid grid-cols-2'>
			<div className='pl-4'>
				<p className='text-colorFive font-bold'>Total Amount</p>
				<h2 className='text-colorFour tracking-widest text-xl'>PKR 500</h2>
			</div>
			<div className='bg-colorFour'>
				<div className='flex justify-center items-center h-full text-colorOne'>
					<Link to='/checkout'>
						<p className='tracking-wide'>CHECKOUT</p>
					</Link>
					<ArrowLongRightIcon className='w-6' />
				</div>
			</div>
		</div>
	);
}
