import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

export function RatingsFilter() {
	return (
		<div className='flex'>
			<StarIcon className='w-10' />
			<StarIcon className='w-10' />
			<StarIcon className='w-10' />
			<StarIcon className='w-10 text-white' />
			<StarIcon className='w-10 text-white' />
		</div>
	);
}
