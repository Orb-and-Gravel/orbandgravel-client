import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { QuantIncDec } from './QuantIncDec';

export function DropdownMenuCartItem({ item }) {
	return (
		<li>
			<div className='flex gap-x-4 p-2 hover:bg-colorHeader'>
				<div className='w-14'>
					<img src={item.imgUrl} className='rounded' />
				</div>
				<div className='mt-1'>
					<p className='whitespace-nowrap tracking-wide text-colorFour'>
						{item.name}
					</p>
					<div className='mt-4'>
						<QuantIncDec quantity={item.quantity} price={item.price} />
					</div>
				</div>
				<div className='ml-14 mt-1'>
					<XMarkIcon className='w-4 text-colorFour cursor-pointer' />
				</div>
			</div>
		</li>
	);
}
