import { StarIcon } from '@heroicons/react/16/solid';
import moment from 'moment';
import React from 'react';

export function Review({ review }) {
	return (
		<div className='w-full'>
			<hr className='border border-colorFive' />
			<div className='grid grid-cols-9 sm:my-10 mt-10'>
				<h4 className='hidden sm:block col-span-2 font-bold justify-self-center self-center'>
					Mary Jane
				</h4>
				<div className='sm:col-span-6 col-span-9'>
					<span className='flex'>
						{Array.from({ length: review.rating }).map(() => (
							<StarIcon className='w-4' />
						))}
					</span>
					<h4 className='text-sm font-bold mt-4'>{review.heading}</h4>
					<p className='truncate'>{review.review}</p>
				</div>
				<p className='justify-self-end sm:block hidden'>
					{moment(review.createdAt).format('DD/MM/YYYY')}
				</p>
			</div>
			<div className='mb-10 mt-4 flex justify-between pr-1 text-colorFive sm:hidden'>
				<h4 className='text-sm font-bold'>Mary Jane</h4>
				<p>{moment(review.createdAt).format('DD/MM/YYYY')}</p>
			</div>
		</div>
	);
}
