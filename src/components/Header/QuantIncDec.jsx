import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import React from 'react';

export function QuantIncDec({ quantity, price }) {
	return (
		<div className='flex items-center'>
			<div className='flex bg-white'>
				<button className='border border-colorFour rounded-l px-1 hover:bg-colorOne'>
					<PlusSmallIcon className='w-4 text-colorFive' />
				</button>
				<p className='border border-colorFour border-l-0 border-r-0 px-2 text-sm leading-6 font-bold text-colorFive'>
					{quantity}
				</p>
				<button className='border border-colorFour rounded-r px-1 hover:bg-colorOne'>
					<MinusSmallIcon className='w-4 text-colorFive' />
				</button>
			</div>
			<p className='ml-3 font-bold text-colorThree whitespace-nowrap'>
				PKR {price * quantity}
			</p>
		</div>
	);
}
