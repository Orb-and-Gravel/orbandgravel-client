import { StarIcon } from '@heroicons/react/16/solid';
import React from 'react';

export function RatingsFilter() {
	return (
		<React.Fragment>
			<div className='flex hover:bg-colorTwo px-2'>
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<progress value={60} max={100} className='ml-2 mt-2' />
			</div>
			<div className='flex mt-1 px-2 hover:bg-colorTwo '>
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5 text-white' />
				<progress value={32} max={100} className='ml-2 mt-2' />
			</div>
			<div className='flex mt-1 px-2 opacity-50 '>
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<progress value={0} max={100} className='ml-2 mt-2' />
			</div>
			<div className='flex mt-1 px-2 opacity-50 '>
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<progress value={0} max={100} className='ml-2 mt-2' />
			</div>
			<div className='flex mt-1 px-2 opacity-50 '>
				<StarIcon className='w-5' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<progress value={0} max={100} className='ml-2 mt-2' />
			</div>
		</React.Fragment>
	);
}
