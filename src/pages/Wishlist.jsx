import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';

export function Wishlist() {
	return (
		<React.Fragment>
			<section className='text-colorThree'>
				<HeartIcon className='w-32 stroke-2' />
				<h2 className='text-7xl font-oswald font-black'>My Wishlist</h2>
			</section>
		</React.Fragment>
	);
}
