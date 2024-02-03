import React from 'react';

export function ProductItem({ name, price, imgUrl, alt, width, height }) {
	return (
		<div>
			<img
				src={imgUrl}
				alt={alt}
				loading='lazy'
				className='object-cover'
				style={{
					width: width,
					height: height,
				}}
			/>
			<p className='text-lg tracking-wide text-colorFive'>{name}</p>
			<p className='text-colorFour font-semibold'>{price}</p>
		</div>
	);
}
