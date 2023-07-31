import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { QuantIncDecSmallScreen } from './QuantIncDecSmallScreen';

export function CartDropdownMenuItemSmallScreen({ item }) {
	return (
		<li className='flex justify-between w-full p-4'>
			<div className='flex justify-between w-full items-center'>
				<div className='flex'>
					<div className='max-w-[80px] min-w-[80px]'>
						<img src={item.imgUrl} className='rounded' />
					</div>
					<div className='ml-5 space-y-3 max-w-[200px] my-auto'>
						<h2 className='text-xl text-colorFour tracking-wide'>
							{item.name}
						</h2>
						<QuantIncDecSmallScreen quantity={item.quantity} />
					</div>
				</div>
				<div className='mr-2'>
					<h2 className='text-lg text-colorThree font-bold whitespace-nowrap'>
						PKR {item.price}
					</h2>
				</div>
			</div>
			<div>
				<XMarkIcon className='w-5 text-colorFour cursor-pointer' />
			</div>
		</li>
	);
}
