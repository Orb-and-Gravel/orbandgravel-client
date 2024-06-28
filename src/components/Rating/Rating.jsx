import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

export function Rating({ reviewsOverview }) {
	return (
		<div className='flex items-center'>
			{Array.from({ length: 5 }, (_, i) => {
				if (i < reviewsOverview.rating) {
					return <StarIcon key={i} className='text-colorTwo' />;
				} else {
					return <StarIcon key={i} className='text-gray-300' />;
				}
			})}
			<p className='text-gray-400 ml-3 leading-none'>
				({reviewsOverview.total})
			</p>
		</div>
	);
}
