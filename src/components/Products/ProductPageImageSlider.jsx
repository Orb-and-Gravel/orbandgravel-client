import React from 'react';
import { CarouselProductPage } from '../Carousel/CarouselProductPage';
import { CarouselSingleProductPage } from '../Carousel/CarouselSingleProductPage';

export function ProductPageImageSlider({ slides }) {
	return (
		<section className='px-10'>
			<CarouselSingleProductPage />
			<CarouselProductPage />
		</section>
	);
}
