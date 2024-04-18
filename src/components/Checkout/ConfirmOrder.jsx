import React from 'react';

export function ConfirmOrder() {
	return (
		<div className='text-colorFive'>
			<h3 className='font-bold mb-7 text-xl'>Confirm Details</h3>
			<div className='grid grid-cols-[40%_60%] mt-7'>
				<div>
					<p className='text-sm'>Name</p>
				</div>
				<div>
					<p className='font-bold'>John Doe</p>
				</div>

				<div className='mt-4'>
					<p className='text-sm'>Email</p>
				</div>
				<div className='mt-4'>
					<p className='font-bold break-words'>acbkjs.asas@asiks.aco</p>
				</div>

				<div className='mt-4'>
					<p className='text-sm'>Phone</p>
				</div>
				<div className='mt-4'>
					<p className='font-bold break-words'>+49552255115787</p>
				</div>

				<div className='mt-4'>
					<p className='text-sm'>Shipping Address</p>
				</div>
				<div className='mt-4'>
					<p className='font-bold'>
						0940 Schaden Knoll, Suite 515, 06368-6366, Wymanfurt, Montana,
						United States
					</p>
				</div>
			</div>
		</div>
	);
}
