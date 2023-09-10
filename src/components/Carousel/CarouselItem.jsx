import React from 'react';

export default function CarouselItem({ imgLink }) {
	return (
		<img
			className='item aspect-4/5 p-1 hover:scale-105 transition-all hover:cursor-pointer'
			src={imgLink}
			loading='lazy'
		/>
	);
}
