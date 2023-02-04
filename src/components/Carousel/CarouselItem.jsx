import React from 'react';

export default function CarouselItem({ width, children }) {
	return (
		<div
			className='inline-flex items-center justify-center h-[200px] bg-green-500 text-white'
			style={{ width: width }}
		>
			{children}
		</div>
	);
}
