import React from 'react';
import CarouselItem from './CarouselItem';
import { CarouselPics } from './CarouselPics';

export function Carousel() {
	return (
		<CarouselPics>
			<CarouselItem
				imgLink='https://via.placeholder.com/210?text=1'
				alt='alt'
			></CarouselItem>
			<CarouselItem
				imgLink='https://via.placeholder.com/220?text=2'
				alt='alt'
			></CarouselItem>
			<CarouselItem
				imgLink='https://via.placeholder.com/230?text=3'
				alt='alt'
			></CarouselItem>
			<CarouselItem
				imgLink='https://via.placeholder.com/240?text=4'
				alt='alt'
			></CarouselItem>
			<CarouselItem
				imgLink='https://via.placeholder.com/250?text=5'
				alt='alt'
			></CarouselItem>
			<CarouselItem
				imgLink='https://via.placeholder.com/260?text=6'
				alt='alt'
			></CarouselItem>
			<CarouselItem
				imgLink='https://via.placeholder.com/270?text=7'
				alt='alt'
			></CarouselItem>
			<CarouselItem
				imgLink='https://via.placeholder.com/280?text=8'
				alt='alt'
			></CarouselItem>
			<CarouselItem
				imgLink='https://via.placeholder.com/290?text=9'
				alt='alt'
			></CarouselItem>
		</CarouselPics>
	);
}
