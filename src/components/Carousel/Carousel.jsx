import React from 'react';
import CarouselItem from './CarouselItem';
import { CarouselPics } from './CarouselPics';

export function Carousel() {
	return (
		<section>
			<CarouselPics>
				<CarouselItem>item 1</CarouselItem>
				<CarouselItem>item 2</CarouselItem>
				<CarouselItem>item 3</CarouselItem>
			</CarouselPics>
		</section>
	);
}
