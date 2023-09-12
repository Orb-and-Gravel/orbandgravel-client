import React from 'react';

export function ProductItem({ name, price, imgUrl }) {
	return (
		<div className='max-w-[230px] max-h-fit'>
			<img src={imgUrl} alt='' loading='lazy' />
			<p className='text-lg tracking-wide text-colorFive'>{name}</p>
			<p className='text-colorFour font-semibold'>{price}</p>
		</div>
	);
}
