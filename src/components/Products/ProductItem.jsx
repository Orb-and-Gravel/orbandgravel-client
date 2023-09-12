import React from 'react';

export function ProductItem({ name, price, imgUrl, alt }) {
	return (
		<div>
			<img
				src={imgUrl}
				alt={alt}
				loading='lazy'
				className='object-cover w-[280px] h-[360px]'
			/>
			<p className='text-lg tracking-wide text-colorFive'>{name}</p>
			<p className='text-colorFour font-semibold'>{price}</p>
		</div>
	);
}
