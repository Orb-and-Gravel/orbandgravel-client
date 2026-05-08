import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetOrder } from '../query/hooks/useOrder';

export function Order() {
	const { slug } = useParams();
	const { data: orderData, isLoading } = useGetOrder(slug);
	const order = orderData?.data?.message;

	if (isLoading) {
		return (
			<div className='xl:my-14 xl:mx-32 lg:my-10 lg:mx-14 md:my-7 md:mx-10 m-2'>
				<p className='text-center mt-10 text-colorFive'>Loading order...</p>
			</div>
		);
	}

	if (!order) {
		return (
			<div className='xl:my-14 xl:mx-32 lg:my-10 lg:mx-14 md:my-7 md:mx-10 m-2'>
				<p className='text-center mt-10 text-colorFive'>Orders not found.</p>
			</div>
		);
	}

	return (
		<div className='xl:my-14 xl:mx-32 lg:my-10 lg:mx-14 md:my-7 md:mx-10 m-2'>
			<h2 className='text-3xl font-semibold text-colorFive'>
				Order #{order.orderNumber}
			</h2>
			<div className='flex flex-wrap gap-x-6 mt-1'>
				<span>
					<span>Placed On: </span>
					<span className='font-bold text-colorFour text-lg'>
						{new Date(order.createdAt).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</span>
				</span>
				<span>
					<span>Status: </span>
					<span className='font-bold text-colorFour text-lg capitalize'>
						{order.status}
					</span>
				</span>
			</div>
			<section>
				<div className='mt-3'>
					{order.items.map((item, idx) => (
						<div key={idx}>
							<hr className='border-1 border-colorTwo mt-2' />
							<div className='p-4'>
								<span className='text-sm text-gray-500'>{item.name}</span>
								<div className='mt-1 grid grid-cols-4 items-center'>
									<div>
										{item.color?.images?.[0]?.imgLink && (
											<img
												src={item.color.images[0].imgLink}
												alt={item.color.images[0].alt || ''}
												className='w-56 h-36 object-cover rounded-lg'
											/>
										)}
									</div>
									<span className='flex justify-center gap-x-2 mt-1'>
										{item.color?.color && (
											<>
												<span className='text-sm'>color: </span>
												<span
													className='w-5 h-5 rounded-full'
													style={{ backgroundColor: item.color.color }}
												/>
											</>
										)}
									</span>
									<span className='text-center mt-1'>
										<span className='text-sm'>qty: </span>
										<span className='font-extrabold'>x{item.quantity}</span>
									</span>
									<span className='text-center text-xl font-extrabold text-colorFour mt-1'>
										PKR {item.productTotalPrice}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<section>
				<hr className='border-1 border-colorTwo mt-3 mb-6' />
				<div className='bg-colorHeader md:w-1/3 w-full ml-auto rounded-md p-3'>
					<div className='flex justify-between'>
						<p>Subtotal</p>
						<p className='font-bold'>PKR {order.totalAmount}</p>
					</div>
					<div className='flex justify-between mt-2'>
						<p>Shipping</p>
						<p className='font-bold'>PKR 0</p>
					</div>
					<hr className='mt-2 border-1 border-colorOne' />
					<div className='mt-1 flex justify-between'>
						<p className='font-bold'>Total</p>
						<p className='font-black text-lg'>PKR {order.totalAmount}</p>
					</div>
				</div>
			</section>
			<section className='mt-6'>
				<hr className='border-1 border-colorTwo mb-4' />
				<h4 className='font-semibold text-lg'>Shipping Details</h4>
				<div className='mt-2 space-y-1 text-sm'>
					<p>
						<span className='text-gray-500'>Name:</span>{' '}
						{order.contactInfo.fullName}
					</p>
					<p>
						<span className='text-gray-500'>Email:</span>{' '}
						{order.contactInfo.email}
					</p>
					<p>
						<span className='text-gray-500'>Phone:</span>{' '}
						{order.contactInfo.phone}
					</p>
					<p>
						<span className='text-gray-500'>Address:</span>{' '}
						{order.shippingInfo.shippingAddress}
					</p>
					<p>
						<span className='text-gray-500'>Postal Code:</span>{' '}
						{order.shippingInfo.postalCode}
					</p>
					<p>
						<span className='text-gray-500'>Payment:</span>{' '}
						{order.paymentMethod === 'cod'
							? 'Cash on Delivery'
							: order.paymentMethod}
					</p>
				</div>
			</section>
		</div>
	);
}
