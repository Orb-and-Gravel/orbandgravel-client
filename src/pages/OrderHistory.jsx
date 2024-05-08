import React from 'react';

export function OrderHistory() {
	return (
		<div className='xl:m-10 lg:m-7 md:m-4 m-2'>
			<h2 className='sm:text-8xl text-5xl font-oswald font-black tracking-tight text-center'>
				Order History
			</h2>
			<section className='mt-14 max-w-screen-2xl m-auto'>
				<div className='grid grid-cols-4 font-semibold text-center'>
					<h5>Order Number</h5>
					<h5>Order Detail</h5>
					<h5>Placed On</h5>
					<h5>Tentative Delivery</h5>
				</div>
				<div className='grid grid-cols-4 mt-2 hover:bg-gray-200'>
					<a
						href='#'
						className='text-center underline decoration-1 underline-offset-1 text-colorThree'
					>
						1335233223
					</a>
					<div className='flex items-center gap-x-2 justify-center'>
						<img
							src='https://plus.unsplash.com/premium_photo-1678554875441-b286d1b6174a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt=''
							className='w-10 h-14 object-cover rounded-md'
						/>
						<span>1x Ring, ...</span>
					</div>
					<span className='text-center font-bold'>23-10-2011</span>
					<span className='text-center font-bold'>23-11-2011</span>
				</div>
			</section>
		</div>
	);
}
