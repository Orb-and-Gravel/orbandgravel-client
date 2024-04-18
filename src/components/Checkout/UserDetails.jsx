import React from 'react';

export function UserDetails() {
	return (
		<div className='text-colorFive'>
			<h3 className='font-bold mb-5 text-xl'>User Details</h3>
			<p className='mb-1 text-sm'>Full Name</p>
			<input
				type='text'
				className='w-full rounded-md p-2 outline-none border border-colorOne'
			/>
			<p className='mb-1 mt-7 text-sm'>Email</p>
			<input
				type='text'
				className='w-full rounded-md p-2 outline-none border border-colorOne'
			/>
			<p className='mb-1 mt-7 text-sm'>Phone Number</p>
			<input
				type='text'
				className='w-full rounded-md p-2 outline-none border border-colorOne'
			/>
		</div>
	);
}
