import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

export function Wishlist() {
	return (
		<React.Fragment>
			<section className='text-colorFive flex flex-col items-center mt-8'>
				<h2 className='text-8xl font-oswald font-black tracking-tight'>
					My Wishlist
				</h2>
				<HeartIcon className='w-28 text-rose-300' />
			</section>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Product Name</th>
						<th>Price</th>
						<th>Stock Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr></tr>
				</tbody>
			</table>
		</React.Fragment>
	);
}
