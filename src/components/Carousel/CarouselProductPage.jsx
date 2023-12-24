import React from 'react';
import { CarouselItemProductPage } from './CarouselItemProductPage';
import { CarouselPicsProductPage } from './CarouselPicsProductPage';

export function CarouselProductPage({ slides, activeSlide, setActiveSlide }) {
	return (
		<CarouselPicsProductPage activeSlide={activeSlide}>
			{slides.map((slide, index) => {
				return (
					<CarouselItemProductPage
						key={index}
						imgLink={slide.imgLink}
						alt={slide.alt}
						activeSlide={activeSlide}
						index={index}
						setActiveSlide={setActiveSlide}
					/>
				);
			})}
		</CarouselPicsProductPage>
	);
}
