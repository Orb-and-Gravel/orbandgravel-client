import React from 'react';
import order from '../assets/order.json';

export function Order() {
	return (
		<div className='xl:my-14 xl:mx-32 lg:my-10 lg:mx-14 md:my-7 md:mx-10 m-2'>
			<h2 className='text-3xl font-semibold text-colorFive'>
				Order #1231241224
			</h2>
			<span className='mt-1 inline-block'>
				<span>Placed On: </span>
				<span className='font-bold text-colorFour text-lg'>
					12th December 2023
				</span>
			</span>
			<section>
				<div className='mt-3'>
					{order.map((ord) => (
						<>
							<hr className='border-1 border-colorTwo mt-2' />
							<div className='p-4'>
								<span className='text-sm text-gray-500'>
									Product Code: {ord.id}
								</span>
								<div className='mt-1 grid grid-cols-4'>
									<a href={`/single-product-page/${ord.id}`} className='w-fit'>
										<img
											src='https://media.istockphoto.com/id/1434115118/de/foto/diamant-auf-goldenem-grund.jpg?s=1024x1024&w=is&k=20&c=awKxNLURdqz1haQdL5rpTcOdZyt04T7Epbon3u89t5M='
											alt=''
											className='w-56 h-36 object-cover rounded-lg'
										/>
									</a>
									<span className='flex justify-center gap-x-2 mt-1'>
										<span className='text-sm'>color: </span>
										<span
											className=' w-5 h-5 rounded-full'
											style={{ backgroundColor: ord.color }}
										/>
									</span>
									<span className='text-center mt-1'>
										<span className='text-sm'>qty: </span>
										<span className='font-extrabold'>x{ord.quantity}</span>
									</span>
									<span className='text-center text-xl font-extrabold text-colorFour mt-1'>
										${ord.price}
									</span>
								</div>
							</div>
						</>
					))}
				</div>
			</section>
			<section>
				<hr className='border-1 border-colorTwo mt-3 mb-6' />
				<div className='bg-colorHeader w-1/3 ml-auto rounded-md p-3'>
					<div className='flex justify-between'>
						<p>Subtotal</p>
						<p className='font-bold'>$12000</p>
					</div>
					<div className='flex justify-between mt-2'>
						<p>Shipping</p>
						<p className='font-bold'>$10</p>
					</div>
					<hr className='mt-2 border-1 border-colorOne' />
					<div className='mt-1 flex justify-between'>
						<p className='font-bold'>Total</p>
						<p className='font-black text-lg'>$12500</p>
					</div>
				</div>
			</section>
		</div>
	);
}
