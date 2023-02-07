import React from 'react';

export default function CarouselItem({ width, children }) {
	return (
		<div
			className='inline-flex items-center mr-3 justify-center h-[350px] bg-green-500 text-white shadow-md'
			style={{ width: width }}
		>
			{children}
		</div>
	);
}
