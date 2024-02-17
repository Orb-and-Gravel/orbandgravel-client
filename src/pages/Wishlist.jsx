import React from 'react';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/solid';
import wishlist from '../assets/wishlist.json';

export function Wishlist() {
	return (
		<React.Fragment>
			<section className='text-colorFive flex flex-col items-center mt-8'>
				<h2 className='text-8xl font-oswald font-black tracking-tight'>
					My Wishlist
				</h2>
				<HeartIcon className='w-28 text-rose-300' />
			</section>
			<section className='px-32 mt-7'>
				<table className='w-full'>
					<thead className='w-full text-left'>
						<th className='w-10 p-3'></th>
						<th className='w-24 p-3'></th>
						<th className='p-3'>Product Name</th>
						<th className='p-3'>Price</th>
						<th className='p-3'>Stock Status</th>
						<th className='p-3'></th>
					</thead>
					<tbody className='w-full'>
						{wishlist.map((item) => (
							<tr className='w-full border-t-2' key={item.id}>
								<td className='p-3'>
									<TrashIcon className='w-6 cursor-pointer text-red-500 transition-all hover:text-red-600' />
								</td>
								<td className='p-3'>
									<img
										src={item.productImage}
										alt='img'
										className='w-16 h-20 rounded-md object-cover'
									/>
								</td>
								<td className='p-3'>
									<p>{item.productName}</p>
								</td>
								<td className='p-3'>{item.price}</td>
								<td className='p-3'>
									<p
										className={
											item.stockStatus ? 'text-green-700' : 'text-red-700'
										}
									>
										{item.stockStatus ? 'In Stock' : 'Out of Stock'}
									</p>
								</td>
								<td className='p-3'>
									<button
										className={`text-xs bg-colorFour text-colorOne px-5 py-2 rounded-full transition-all ${
											item.stockStatus
												? 'hover:bg-colorFive'
												: 'opacity-70 cursor-not-allowed'
										}`}
										disabled={!item.stockStatus}
									>
										ADD TO CART
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</React.Fragment>
	);
}
