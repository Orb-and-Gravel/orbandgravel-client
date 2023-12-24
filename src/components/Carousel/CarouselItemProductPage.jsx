import React from 'react';

export function CarouselItemProductPage({
	imgLink,
	alt,
	activeSlide,
	index,
	setActiveSlide,
}) {
	return (
		<div
			className='item aspect-4/5 p-1 relative cursor-pointer'
			onClick={() => setActiveSlide(index)}
		>
			<img
				className={`object-cover w-full transition-all h-full ${
					activeSlide === index
						? 'brightness-100'
						: 'brightness-50 hover:brightness-75'
				}`}
				src={imgLink}
				alt={alt}
			/>
		</div>
	);
}
