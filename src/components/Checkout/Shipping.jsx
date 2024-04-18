import React from 'react';

export default function Shipping() {
	return (
		<div className='text-colorFive'>
			<h3 className='font-bold mb-7 text-xl'>User Details</h3>
			<div className='flex items-center'>
				<p className='w-full text-sm font-bold'>Saved Addresses</p>
				<select
					name='addresses'
					id='saved-addresses'
					className='text-colorFive p-2 w-full rounded-md border border-colorOne focus-visible:outline-none cursor-pointer'
				>
					<option value='address-1' className='text-colorFour bg-white'>
						Address 1
					</option>
					<option value='address-2' className='text-colorFour bg-white'>
						Address 2
					</option>
				</select>
			</div>
			<div>
				<p className='mb-1 mt-7 text-sm'>Shipping Address</p>
				<input
					type='text'
					className='w-full rounded-md p-2 outline-none border border-colorOne'
				/>
			</div>
			<div className='flex gap-x-5'>
				<div className='w-full'>
					<p className='mb-1 mt-7 text-sm'>Postal Code</p>
					<input
						type='text'
						className='w-full rounded-md p-2 outline-none border border-colorOne'
					/>
				</div>
				<div className='w-full'>
					<p className='mb-1 mt-7 text-sm'>Payment Method</p>
					<select
						name='paymentmethod'
						id='payment'
						className='text-colorFive p-2 w-full rounded-md border border-colorOne focus-visible:outline-none cursor-pointer'
						disabled
					>
						<option value='address-1' className='text-colorFour bg-white'>
							Cash On Delivery
						</option>
					</select>
				</div>
			</div>
		</div>
	);
}
