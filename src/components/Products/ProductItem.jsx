import React from 'react';

export function ProductItem({ name, price, imgUrl, alt }) {
	return (
		<div className='max-w-[250px] max-h-fit'>
			<img
				src={imgUrl}
				alt={alt}
				loading='lazy'
				className='h-full object-cover w-full'
			/>
			<p className='text-lg tracking-wide text-colorFive'>{name}</p>
			<p className='text-colorFour font-semibold'>{price}</p>
		</div>
	);
}
