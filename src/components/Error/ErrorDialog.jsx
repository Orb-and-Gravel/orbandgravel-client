import { ArrowLeftIcon, XCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';

export function ErrorDialog({ errorText }) {
	return (
		<dialog open className='bg-red-600 rounded-md p-5 z-50'>
			<div className='flex gap-x-2'>
				<XCircleIcon className='text-white w-6 stroke-2' />
				<h3 className='text-xl font-bold text-white'>Error Occured</h3>
			</div>
			<p className='text-white mt-2'>{errorText}</p>
			<a
				className='mt-2 text-white flex items-center gap-x-1 hover:underline hover:underline-offset-4 cursor-pointer'
				href='/'
			>
				<ArrowLeftIcon className='w-4' />
				<p>Go to Homepage</p>
			</a>
		</dialog>
	);
}
