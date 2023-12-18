import React from 'react';

export default function CarouselItemProductPage({ imgLink, alt }) {
	return (
		<div className='item aspect-4/5 p-1 relative'>
			<img
				className='object-cover w-full transition-all h-full brightness-50'
				src={imgLink}
				alt={alt}
			/>
		</div>
	);
}
