import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

export function SeasonProductItem({ imgUrl, name, alt }) {
	return (
		<div className='max-w-[300px] hover:cursor-pointer group'>
			<div className='h-full'>
				<img
					src={imgUrl}
					alt={alt}
					className='rounded-xl h-full w-full object-cover'
					loading='lazy'
				/>
			</div>
			<span className='flex justify-between mt-1 text-colorFive'>
				<p className='tracking-wide'>{name}</p>
				<ArrowLongRightIcon className='w-6 group-hover:translate-x-2 group-hover:transition-all' />
			</span>
		</div>
	);
}
