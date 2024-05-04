import React from 'react';

export function Account() {
	return (
		<div className='xl:m-10 lg:m-7 md:m-4 m-2'>
			<h2 className='sm:text-8xl text-5xl font-oswald font-black tracking-tight text-center'>
				Account Details
			</h2>
			<div className='mt-10 max-w-lg mx-auto'>
				<h5 className='text-xl font-semibold text-center'>
					Personal Information
				</h5>
				<div className=''>
					<p className='mb-1 text-sm'>Full Name</p>
					<input
						type='text'
						className='w-full rounded-md p-2 outline-none border border-colorOne'
					/>
				</div>
				<div className='mt-4'>
					<p className='mb-1 text-sm'>Date of Birth</p>
					<input
						type='date'
						className='w-full rounded-md p-2 outline-none border border-colorOne'
					/>
				</div>
				<div className='mt-4'>
					<p className='mb-1 text-sm'>Phone Number</p>
					<input
						type='text'
						className='w-full rounded-md p-2 outline-none border border-colorOne'
					/>
				</div>
			</div>
			<div className='mt-10 max-w-lg mx-auto'>
				<h5 className='text-xl font-semibold text-center'>Email Address</h5>
				<div className=''>
					<p className='mb-1 text-sm'>Email</p>
					<input
						type='email'
						className='w-full rounded-md p-2 outline-none border border-colorOne'
					/>
				</div>
			</div>
		</div>
	);
}
