import React from 'react';
import { CarouselSinglePicsProductPage } from './CarouselSinglePicsProductPage';
import CarouselSingleItemProductPage from './CarouselSingleItemProductPage';

export function CarouselSingleProductPage({
	slides,
	setActiveSlide,
	autoForwardSlide,
	autoBackwardSlide,
}) {
	return (
		<CarouselSinglePicsProductPage
			setActiveSlide={setActiveSlide}
			autoBackwardSlide={autoBackwardSlide}
			autoForwardSlide={autoForwardSlide}
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
