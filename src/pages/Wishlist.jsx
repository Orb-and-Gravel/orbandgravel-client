import React from 'react';
import {
	HeartIcon,
	ShoppingCartIcon,
	TrashIcon,
} from '@heroicons/react/24/solid';
import wishlist from '../assets/wishlist.json';
import { useGetWishlist } from '../query/hooks/useWishlist';
import { ErrorDialog } from '../components/Error/ErrorDialog';
import { Loader } from '../components/Loader/Loader';

export function Wishlist() {
	const { data, isLoading, isError, error } = useGetWishlist('userId');
	if (isError) return <ErrorDialog errorText={error.response.data.message} />;
	else if (isLoading)
		return (
			<div className='flex justify-center'>
				<Loader />
			</div>
		);
	else
		return (
			<React.Fragment>
				<section className='text-colorFive flex flex-col items-center mt-8'>
					<h2 className='sm:text-8xl text-5xl font-oswald font-black tracking-tight'>
						My Wishlist
					</h2>
					<HeartIcon className='sm:w-28 w-16 text-rose-300' />
				</section>
				<section className='lg:px-32 md:px-16 mt-7 overflow-auto'>
					<table className='w-full min-w-[36rem]'>
						<thead className='w-full text-left'>
							<th className='w-10 p-3'></th>
							<th className='w-24 p-3'></th>
							<th className='p-3'>Product Name</th>
							<th className='p-3'>Price</th>
							<th className='p-3'>Stock Status</th>
							<th className='p-3'></th>
						</thead>
						<tbody className='w-full'>
							{data?.data.message.map((item) => (
								<tr className='w-full border-t-2' key={item._id}>
									<td className='p-3'>
										<TrashIcon className='w-6 cursor-pointer text-red-500 transition-all hover:text-red-600' />
									</td>
									<td className='p-3'>
										<img
											src={item.product.headlineImages[0].image.imgLink}
											alt='img'
											className='w-16 h-20 rounded-md object-cover'
										/>
									</td>
									<td className='p-3'>
										<p>{item.product.name}</p>
									</td>
									<td className='p-3'>{item.product.price}</td>
									<td className='p-3'>
										<p
											className={
												item.stockStatus ? 'text-green-700' : 'text-red-700'
											}
										>
											{item.stockStatus ? 'In Stock' : 'Out of Stock'}
										</p>
									</td>
									<td className='p-3 text-center'>
										<button
											className={`text-xs bg-colorFour text-colorOne px-5 py-2 rounded-full transition-all ${
												item.stockStatus
													? 'hover:bg-colorFive'
													: 'opacity-70 cursor-not-allowed'
											}`}
											disabled={!item.stockStatus}
										>
											<span className='sm:block hidden'>ADD TO CART</span>
											<ShoppingCartIcon className='w-4 h-4 block sm:hidden' />
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
