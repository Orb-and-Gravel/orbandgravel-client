import React from 'react';
import CarouselItemProductPage from './CarouselItemProductPage';
import CarouselPicsProductPage from './CarouselPicsProductPage';

export function CarouselProductPage({
	slides,
	activeSlide,
	activeIndexCarouselProduct,
	setActiveIndexCarouselProduct,
	productPageRef,
}) {
	return (
		<CarouselPicsProductPage
			activeSlide={activeSlide}
			activeIndex={activeIndexCarouselProduct}
			setActiveIndex={setActiveIndexCarouselProduct}
			ref={productPageRef}
		>
			{slides.map((slide, index) => {
				return (
					<CarouselItemProductPage
						key={index}
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
