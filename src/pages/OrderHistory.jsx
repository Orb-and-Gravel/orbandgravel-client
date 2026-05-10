import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetOrders } from '../query/hooks/useOrder';

export function OrderHistory() {
	const { userRecord } = useSelector((state) => state.user);
	const { data: ordersData, isLoading } = useGetOrders(userRecord?._id);
	const orders = ordersData?.data?.message || [];

	return (
		<div className='xl:m-10 lg:m-7 md:m-4 m-2 min-h-[calc(100vh-540px)]'>
			<h2 className='sm:text-8xl text-5xl font-oswald font-black tracking-tight text-center'>
				Order History
			</h2>
			<section className='mt-14 max-w-screen-2xl m-auto'>
				<div className='grid-cols-4 font-semibold text-center md:grid hidden'>
					<h5>Order Number</h5>
					<h5>Order Detail</h5>
					<h5>Placed On</h5>
					<h5>Status</h5>
				</div>
				{isLoading && (
					<p className='text-center mt-10 text-colorFive'>Loading orders...</p>
				)}
				{!isLoading && orders.length === 0 && (
					<p className='text-center mt-10 text-colorFive'>No orders yet.</p>
				)}
				{orders.map((order) => (
					<div key={order._id}>
						<div className='md:grid md:grid-cols-4 mt-2 hover:bg-colorHeader py-2 pl-5 md:pl-0 flex flex-col gap-y-1'>
							<p className='md:text-center underline decoration-1 underline-offset-1 text-colorThree'>
								<Link to={`/order/${order.orderNumber}`}>
									{order.orderNumber}
								</Link>
							</p>
							<div className='flex items-center gap-x-2 md:justify-center'>
								{order.items[0]?.color?.images?.[0]?.imgLink && (
									<img
										src={order.items[0].color.images[0].imgLink}
										alt={order.items[0].color.images[0].alt || ''}
										className='w-14 h-10 object-cover rounded-md'
									/>
								)}
								<span className='md:block hidden'>
									{order.items[0]?.name}
									{order.items.length > 1 && ', ...'}
								</span>
								<span className='block md:hidden'>
									{order.items
										.map((i) => `${i.quantity}x ${i.name}`)
										.join(', ')}
								</span>
							</div>
							<p className='md:text-center font-bold flex items-center gap-x-2 md:block'>
								<span className='text-sm text-colorTwo md:hidden'>
									Order Date:{' '}
								</span>
								{new Date(order.createdAt).toLocaleDateString()}
							</p>
							<p className='md:text-center font-bold flex items-center gap-x-2 md:block capitalize'>
								<span className='text-sm text-colorTwo md:hidden'>
									Status:{' '}
								</span>
								{order.status}
							</p>
						</div>
						<hr className='border-1 border-colorOne my-4 md:hidden' />
					</div>
				))}
			</section>
		</div>
	);
}
