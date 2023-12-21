import React from 'react';
import { CarouselSinglePicsProductPage } from './CarouselSinglePicsProductPage';
import CarouselSingleItemProductPage from './CarouselSingleItemProductPage';

export function CarouselSingleProductPage({
	slides,
	activeSlide,
	setActiveSlide,
}) {
	return (
		<CarouselSinglePicsProductPage setActiveSlide={setActiveSlide}>
			{slides.map((slide) => {
				return (
					<CarouselSingleItemProductPage
						imgLink={slide.imgLink}
						alt={slide.alt}
					/>
				);
			})}
		</CarouselSinglePicsProductPage>
	);
}
