import React from 'react';
import CarouselItem from './CarouselItem';
import { CarouselPics } from './CarouselPics';

export function Carousel() {
	return (
		<CarouselPics>
			<CarouselItem>item 1</CarouselItem>
			<CarouselItem>item 2</CarouselItem>
			<CarouselItem>item 3</CarouselItem>
			<CarouselItem>item 4</CarouselItem>
			<CarouselItem>item 5</CarouselItem>
			<CarouselItem>item 6</CarouselItem>
			<CarouselItem>item 7</CarouselItem>
		</CarouselPics>
	);
}
