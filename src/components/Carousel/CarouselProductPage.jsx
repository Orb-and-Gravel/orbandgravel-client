import React from 'react';
import CarouselItemProductPage from './CarouselItemProductPage';
import { CarouselPicsProductPage } from './CarouselPicsProductPage';

export function CarouselProductPage({ slides, activeSlide }) {
	return (
		<CarouselPicsProductPage>
			{slides.map((slide, index) => {
				return (
					<CarouselItemProductPage
						imgLink={slide.imgLink}
						alt={slide.alt}
						activeSlide={activeSlide}
						index={index}
					/>
				);
			})}
		</CarouselPicsProductPage>
	);
}
