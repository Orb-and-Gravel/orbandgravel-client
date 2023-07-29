import { PlayIcon } from '@heroicons/react/24/solid';
import React from 'react';

export function QuantIncDecSmallScreen({ quantity }) {
	return (
		<div className='flex border border-colorThree justify-between bg-white items-center w-32'>
			<div className='bg-colorFour p-1'>
				<PlayIcon className='w-5 text-colorOne rotate-90 p-0.5' />
			</div>
			<div>
				<p className='font-bold text-lg text-colorFive'>{quantity}</p>
			</div>
			<div className='p-1 bg-colorFour'>
				<PlayIcon className='w-5 text-colorOne -rotate-90 p-0.5' />
			</div>
		</div>
	);
}
