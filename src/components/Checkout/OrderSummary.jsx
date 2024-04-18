import React from 'react';
import cartItems from '../../assets/cartItems.json';
import { PlusIcon } from '@heroicons/react/24/outline';
import { MinusIcon } from '@heroicons/react/24/outline';

export function OrderSummary() {
	return (
		<div className='sm:px-8'>
			<h3 className='font-bold mb-5 text-xl'>Order Summary</h3>
			<div
				className={`overflow-auto max-h-[17rem] ${
					cartItems.length > 1 ? 'pr-2' : ''
				}`}
			>
				{cartItems.map((item, idx) => (
					<section className={idx !== cartItems.length - 1 ? 'mb-16' : ''}>
						<img
							src={item.imgUrl}
							alt='img'
							className='w-full h-48 object-cover'
						/>
						<div className='sm:flex sm:justify-between mt-3 sm:items-start'>
							<div>
								<p className='font-bold text-lg tracking-wide'>{item.name}</p>
								<p className='text-sm'>PKR {item.price}</p>
							</div>

							<div className='flex items-center gap-x-3 mt-3 sm:mt-0'>
								<button className='bg-white border border-colorThree hover:bg-colorOne rounded-lg flex w-8 h-8 justify-center items-center transition-all'>
									<PlusIcon className='w-5' />
								</button>
								<p className='font-bold'>{item.quantity}</p>
								<button className='bg-white border border-colorThree hover:bg-colorOne rounded-lg flex w-8 h-8 justify-center items-center transition-all'>
									<MinusIcon className='w-4' />
								</button>
							</div>
						</div>
						{idx !== cartItems.length - 1 && (
							<hr className='mt-7 border-colorTwo' />
						)}
					</section>
				))}
			</div>
			<div className='space-y-5 mt-6'>
				<div className='flex items-center justify-between'>
					<p className='text-sm text-zinc-600'>Subtotal</p>
					<p>PKR 1000</p>
				</div>
				<div className='flex items-center justify-between'>
					<p className='text-sm text-zinc-600'>Tax</p>
					<p>PKR 1000</p>
				</div>
				<div className='flex items-center justify-between'>
					<p className='text-sm text-zinc-600'>Shipping</p>
					<p>Free</p>
				</div>
				<div className='flex items-center justify-between'>
					<p className='font-bold'>Total</p>
					<p>PKR 1000</p>
				</div>
			</div>
		</div>
	);
}
