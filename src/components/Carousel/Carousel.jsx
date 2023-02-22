import React from 'react';
import CarouselItem from './CarouselItem';
import { CarouselPics } from './CarouselPics';

export function Carousel() {
	return (
		<CarouselPics>
			<CarouselItem imgLink='https://via.placeholder.com/210?text=1'></CarouselItem>
			<CarouselItem imgLink='https://via.placeholder.com/220?text=2'></CarouselItem>
			<CarouselItem imgLink='https://via.placeholder.com/230?text=3'></CarouselItem>
			<CarouselItem imgLink='https://via.placeholder.com/240?text=4'></CarouselItem>
			<CarouselItem imgLink='https://via.placeholder.com/250?text=5'></CarouselItem>
			<CarouselItem imgLink='https://via.placeholder.com/260?text=6'></CarouselItem>
			<CarouselItem imgLink='https://via.placeholder.com/270?text=7'></CarouselItem>
			<CarouselItem imgLink='https://via.placeholder.com/280?text=8'></CarouselItem>
			<CarouselItem imgLink='https://via.placeholder.com/290?text=9'></CarouselItem>
		</CarouselPics>
	);
}
