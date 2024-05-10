import React from 'react';
import orderHistory from '../assets/orderHistory.json';

export function OrderHistory() {
	return (
		<div className='xl:m-10 lg:m-7 md:m-4 m-2'>
			<h2 className='sm:text-8xl text-5xl font-oswald font-black tracking-tight text-center'>
				Order History
			</h2>
			<section className='mt-14 max-w-screen-2xl m-auto'>
				<div className='grid-cols-4 font-semibold text-center md:grid hidden'>
					<h5>Order Number</h5>
					<h5>Order Detail</h5>
					<h5>Placed On</h5>
					<h5>Tentative Delivery</h5>
				</div>
				{orderHistory.map((order) => (
					<>
						<div
							key={order.orderId}
							className='md:grid md:grid-cols-4 mt-2 hover:bg-colorHeader py-2 pl-5 flex flex-col gap-y-1'
						>
							<p className='md:text-center underline decoration-1 underline-offset-1 text-colorThree'>
								<a href='#'>{order.orderId}</a>
							</p>
							<div className='flex items-center gap-x-2 md:justify-center'>
								<img
									src={order.image}
									alt=''
									className='w-14 h-10 object-cover rounded-md'
								/>
								<span className='md:block hidden'>
									{order.orderDetails[0]}, ...
								</span>
								<span className='block md:hidden'>
									{order.orderDetails.join(', ')}
								</span>
							</div>
							<p className='md:text-center font-bold flex items-center gap-x-2 md:block'>
								<p className='text-sm text-colorTwo md:hidden'>Order Date: </p>
								{order.placedOn}
							</p>
							<p className='text-center font-bold md:block hidden'>
								{order.tentativeArrival}
							</p>
						</div>
						<hr className='border-1 border-colorOne my-4 md:hidden' />
					</>
				))}
			</section>
		</div>
	);
}
