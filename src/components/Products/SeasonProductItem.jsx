import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

export function SeasonProductItem({ imgUrl, name, alt }) {
	return (
		<div className='hover:cursor-pointer group'>
			<img
				src={imgUrl}
				alt={alt}
				className='rounded-xl w-[300px] h-[460px] object-cover'
				loading='lazy'
			/>
			<span className='flex justify-between text-colorFive mt-1'>
				<p className='tracking-wide'>{name}</p>
				<ArrowLongRightIcon className='w-6 group-hover:translate-x-2 group-hover:transition-all' />
			</span>
		</div>
	);
}
