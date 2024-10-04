import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

export function ErrorBar({ message }) {
	if (message)
		return (
			<div className='bg-red-400 text-white font-semibold flex justify-center items-start rounded-md p-2'>
				<XMarkIcon className='w-6' />
				<span>{message}</span>
			</div>
		);
}
