import React from 'react';
import cartItems from '../../assets/cartItems.json';

export function OrderSummary() {
	return (
		<div className='px-8'>
			<h3 className='font-bold mb-5 text-xl'>Order Summary</h3>
			<section>
				<img
					src={cartItems[0].imgUrl}
					alt='img'
					className='w-full h-48 object-cover'
				/>
				<div>
					<p>{cartItems[0].name}</p>
				</div>
			</section>
		</div>
	);
}
