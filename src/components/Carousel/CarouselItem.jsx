import React from 'react';

export default function CarouselItem({ imgLink, alt }) {
	return (
		<div className='item aspect-4/5 p-1 hover:scale-105 transition-all relative'>
			<img className='object-cover w-full h-full' src={imgLink} alt={alt} />
			<button className='absolute top-1/2 right-[45%] bg-white'>View</button>
		</div>
	);
}
