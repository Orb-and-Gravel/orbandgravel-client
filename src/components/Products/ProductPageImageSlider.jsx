import React, { useState } from 'react';
import { CarouselProductPage } from '../Carousel/CarouselProductPage';
import { CarouselSingleProductPage } from '../Carousel/CarouselSingleProductPage';

export function ProductPageImageSlider({ slides }) {
	const [activeSlide, setActiveSlide] = useState(0);
	return (
		<section className='px-10'>
			<CarouselSingleProductPage
				slides={slides}
				activeSlide={activeSlide}
				setActiveSlide={setActiveSlide}
			/>
			<CarouselProductPage
				slides={slides}
				activeSlide={activeSlide}
				setActiveSlide={setActiveSlide}
			/>
		</section>
	);
}
