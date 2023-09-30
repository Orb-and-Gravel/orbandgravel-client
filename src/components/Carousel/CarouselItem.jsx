import React from 'react';

export default function CarouselItem({ imgLink, alt }) {
	return (
		<div className='item aspect-4/5 p-1 group relative'>
			<img
				className='object-cover w-full group-hover:scale-105 transition-all h-full'
				src={imgLink}
				alt={alt}
			/>
			<button className='absolute top-2/3 right-0 left-0 rounded-md py-2 2xl:mx-20 xl:mx-16 lg:mx-14 md:mx-12 sm:mx-10 mx-8 text-colorFour bg-white border-2 border-colorOne text-lg font-semibold hidden group-hover:block'>
				View
			</button>
		</div>
	);
}
