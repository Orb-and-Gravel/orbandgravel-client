import React from 'react';

export function ConfirmOrder({ formik }) {
	const v = formik.values;
	return (
		<div className='text-colorFive'>
			<h3 className='font-bold mb-7 text-xl'>Confirm Details</h3>
			<div className='grid grid-cols-[40%_60%] mt-7'>
				<div>
					<p className='text-sm'>Name</p>
				</div>
				<div>
					<p className='font-bold'>{v.fullName || '—'}</p>
				</div>

				<div className='mt-4'>
					<p className='text-sm'>Email</p>
				</div>
				<div className='mt-4'>
					<p className='font-bold break-words'>{v.email || '—'}</p>
				</div>

				<div className='mt-4'>
					<p className='text-sm'>Phone</p>
				</div>
				<div className='mt-4'>
					<p className='font-bold break-words'>{v.phone || '—'}</p>
				</div>

				<div className='mt-4'>
					<p className='text-sm'>Shipping Address</p>
				</div>
				<div className='mt-4'>
					<p className='font-bold'>
						{v.shippingAddress || '—'}
						{v.postalCode ? `, ${v.postalCode}` : ''}
					</p>
				</div>
			</div>
		</div>
	);
}
