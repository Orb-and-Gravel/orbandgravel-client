import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export function TotalPriceCart({ totalPrice }) {
	console.log(totalPrice);
	return (
		<div className='bg-colorOne text-colorFive mt-2 p-2 rounded-md'>
			<div className='flex justify-between items-center'>
				<p className='text-colorFour'>Amount</p>
				<h3 className='font-bold text-xl text-colorFive'>PKR {totalPrice}</h3>
			</div>
			<Link
				to='/checkout'
				className='flex gap-x-1 text-colorTwo bg-colorFour w-full items-center justify-center rounded-full py-2 text-sm tracking-wider'
			>
				CHECKOUT
				<ArrowLongRightIcon className='w-6' />
			</Link>
		</div>
	);
}
