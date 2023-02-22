import React from 'react';

export default function CarouselItem({ children, imgLink }) {
	return <img className='item aspect-4/5 p-1' src={imgLink} />;
}
