import React from 'react';
import { CarouselSinglePicsProductPage } from './CarouselSinglePicsProductPage';
import { CarouselSingleItemProductPage } from './CarouselSingleItemProductPage';

export function CarouselSingleProductPage({
	slides,
	setActiveSlide,
	activeSlide,
}) {
	return (
		<CarouselSinglePicsProductPage
			setActiveSlide={setActiveSlide}
			activeSlide={activeSlide}
		>
			{slides.map((slide, index) => {
				return (
					<CarouselSingleItemProductPage
						key={index}
						imgLink={slide.imgLink}
						alt={slide.alt}
					/>
				);
			})}
		</CarouselSinglePicsProductPage>
	);
}
