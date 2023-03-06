import React from 'react';
import {
	CheckBadgeIcon,
	BanknotesIcon,
	ChartBarIcon,
	ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/solid';

export function Bar() {
	return (
		<div className='bg-colorFive flex justify-evenly py-5'>
			<div className='flex flex-col items-center gap-y-2'>
				<CheckBadgeIcon className='w-20 fill-colorOne' />
				<p className='text-colorOne tracking-widest'>Sublime Product</p>
			</div>
			<div className='flex flex-col items-center gap-y-2'>
				<BanknotesIcon className='w-20 fill-colorOne' />
				<p className='text-colorOne tracking-widest'>Cash on Delivery</p>
			</div>
			<div className='flex flex-col items-center gap-y-2'>
				<ChartBarIcon className='w-20 fill-colorOne' />
				<p className='text-colorOne tracking-widest'>Sale Record</p>
			</div>
			<div className='flex flex-col items-center gap-y-2'>
				<ChatBubbleLeftEllipsisIcon className='w-20 fill-colorOne' />
				<p className='text-colorOne tracking-widest'>Support</p>
			</div>
		</div>
	);
}
