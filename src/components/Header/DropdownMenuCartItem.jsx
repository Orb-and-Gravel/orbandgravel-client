import React from 'react';

export function DropdownMenuCartItem({ item }) {
	return (
		<li>
			<div className='flex gap-x-4'>
				<div className='w-14'>
					<img src={item.imgUrl} />
				</div>
				<div>
					<p className='whitespace-nowrap'>{item.name}</p>
					<div className='flex'>
						<p>{item.quantity}</p>
						<p>{item.price}</p>
					</div>
				</div>
			</div>
		</li>
	);
}
