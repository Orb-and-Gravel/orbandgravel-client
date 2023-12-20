import React from 'react';

export default function CarouselSingleItemProductPage({ imgLink, alt }) {
	return (
		<div className='item-single aspect-4/5 p-1 relative'>
			<img
				className='object-cover w-full transition-all h-full'
				src={imgLink}
				alt={alt}
			/>
		</div>
	);
}
