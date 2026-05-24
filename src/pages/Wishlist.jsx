import React, { useState } from 'react';
import {
	HeartIcon,
	ShoppingCartIcon,
	TrashIcon,
} from '@heroicons/react/24/solid';
import {
	useGetWishlist,
	useRemoveWishlistItem,
} from '../query/hooks/useWishlist';
import { useAddToCart } from '../query/hooks/useCart';
import { ErrorDialog } from '../components/Error/ErrorDialog';
import { Loader } from '../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { Alert } from '../components/Alert/Alert';

export function Wishlist() {
	const { userRecord, guestHash } = useSelector((state) => state.user);
	const { data, isLoading, isError, error } = useGetWishlist(userRecord._id);
	const { mutate } = useRemoveWishlistItem();
	const [loggedin, setLoggedin] = useState(!userRecord._id);
	const [addingProductId, setAddingProductId] = useState(null);
	const [cartAlert, setCartAlert] = useState({
		open: false,
		heading: '',
		description: '',
	});

	const { mutate: addToCartMutation } = useAddToCart();

	const handleAddToCart = (item) => {
		const productId = item.product._id;
		const colorId =
			item.color?._id || item.product?.productSet?.itemSet?.[0]?._id || null;
		setAddingProductId(productId);
		addToCartMutation(
			{ userHash: guestHash, productId, color: colorId },
			{
				onSuccess: () => {
					setCartAlert({
						open: true,
						heading: 'Added to cart',
						description: 'The item has been added to your cart.',
					});
				},
				onError: (err) => {
					setCartAlert({
						open: true,
						heading: 'Could not add to cart',
						description:
							err?.response?.data?.message ||
							'Something went wrong. Please try again.',
					});
				},
				onSettled: () => {
					setAddingProductId(null);
				},
			},
		);
	};

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
							{data?.data.status &&
								data?.data.message.map((item) => {
									const isAdding = addingProductId === item.product._id;
									const disabled = isAdding;
									const rowImage =
										item.color?.images?.[0] ||
										item.product?.headlineImages?.[0]?.image;
									return (
										<tr className='w-full border-t-2' key={item._id}>
											<td className='p-3'>
												<TrashIcon
													onClick={() =>
														mutate({ productId: item.product._id })
													}
													className='w-6 cursor-pointer text-red-500 transition-all hover:text-red-600'
												/>
											</td>
											<td className='p-3'>
												<img
													src={rowImage?.imgLink}
													alt={rowImage?.alt || item.product.name}
													className='w-16 h-20 rounded-md object-cover'
												/>
											</td>
											<td className='p-3'>
												<p>{item.product.name}</p>
												{item.color?.color && (
													<div className='flex items-center gap-2 mt-1'>
														<span className='text-xs text-colorThree tracking-wide'>
															Color:
														</span>
														<div
															className='h-4 w-6 rounded-lg flex-shrink-0'
															style={{ backgroundColor: item.color.color }}
															title={item.color.color}
														/>
													</div>
												)}
											</td>
											<td className='p-3'>{item.product.price}</td>
											<td className='p-3'>
												<p className={true ? 'text-green-700' : 'text-red-700'}>
													{true ? 'In Stock' : 'Out of Stock'}
												</p>
											</td>
											<td className='p-3 text-center'>
												<button
													onClick={() => handleAddToCart(item)}
													disabled={disabled}
													className={`text-xs bg-colorFour text-colorOne px-5 py-2 rounded-full transition-all ${
														disabled
															? 'opacity-70 cursor-not-allowed'
															: 'hover:bg-colorFive'
													}`}
												>
													<span className='sm:block hidden'>
														{isAdding ? 'ADDING...' : 'ADD TO CART'}
													</span>
													<ShoppingCartIcon className='w-4 h-4 block sm:hidden' />
												</button>
											</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</section>
				<Alert
					open={loggedin}
					setOpen={setLoggedin}
					heading='Not logged in'
					description='Login to see your wishlist'
				/>
				<Alert
					open={cartAlert.open}
					setOpen={(open) => setCartAlert((prev) => ({ ...prev, open }))}
					heading={cartAlert.heading}
					description={cartAlert.description}
				/>
			</React.Fragment>
		);
}
