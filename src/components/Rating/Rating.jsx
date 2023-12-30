import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

export function Rating() {
	return (
		<div className='flex items-center'>
			<StarIcon className='text-colorTwo' />
			<StarIcon className='text-colorTwo' />
			<StarIcon className='text-colorTwo' />
			<StarIcon className='text-colorTwo' />
			<StarIcon className='text-gray-300' />
			<p className='text-gray-400 ml-3 leading-none'>(20)</p>
		</div>
	);
}
