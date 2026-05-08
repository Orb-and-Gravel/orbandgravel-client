import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function Account() {
	const { userRecord } = useSelector((state) => state.user);
	const navigate = useNavigate();

	if (!userRecord?._id) {
		navigate('/sign-in', { replace: true });
		return null;
	}

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
					<p className='mb-1 text-sm'>First Name</p>
					<input
						type='text'
						readOnly
						value={userRecord.firstName || ''}
						className='w-full rounded-md p-2 outline-none border border-colorOne bg-gray-50'
					/>
				</div>
				<div className='mt-4'>
					<p className='mb-1 text-sm'>Last Name</p>
					<input
						type='text'
						readOnly
						value={userRecord.lastName || ''}
						className='w-full rounded-md p-2 outline-none border border-colorOne bg-gray-50'
					/>
				</div>
			</div>
			<div className='mt-10 max-w-lg mx-auto'>
				<h5 className='text-xl font-semibold text-center'>Email Address</h5>
				<div className=''>
					<p className='mb-1 text-sm'>Email</p>
					<input
						type='email'
						readOnly
						value={userRecord.email || ''}
						className='w-full rounded-md p-2 outline-none border border-colorOne bg-gray-50'
					/>
				</div>
			</div>
		</div>
	);
}
