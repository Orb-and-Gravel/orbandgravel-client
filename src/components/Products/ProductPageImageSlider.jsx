import React, { useRef, useState } from 'react';
import { CarouselProductPage } from '../Carousel/CarouselProductPage';
import { CarouselSingleProductPage } from '../Carousel/CarouselSingleProductPage';

export function ProductPageImageSlider({ slides }) {
	const [activeSlide, setActiveSlide] = useState(0);
	const [activeIndexCarouselProduct, setActiveIndexCarouselProduct] =
		useState(0);
	const productPage = useRef(null);

	function computeItemsToDisplay() {
		const container = document.querySelector('.container');
		const allItems = getComputedStyle(container);
		const itemsDisplayed = allItems.getPropertyValue('--img-count');
		return itemsDisplayed;
	}

	function autoForwardSlide() {
		const itemsDisplayed = parseInt(computeItemsToDisplay());
		const activeIndexFactor = activeIndexCarouselProduct + 1;
		if (activeSlide + 1 >= activeIndexFactor * itemsDisplayed) {
			productPage.current.moveCarousel(activeIndexCarouselProduct + 1);
		}
	}

	function autoBackwardSlide() {
		const itemsDisplayed = parseInt(computeItemsToDisplay());
		const activeIndexFactor = activeIndexCarouselProduct + 1;
		if (
			activeSlide + (itemsDisplayed - 1) <
			activeIndexFactor * itemsDisplayed
		) {
			productPage.current.moveCarousel(activeIndexCarouselProduct - 1);
		}
	}

	return (
		<section className='px-10'>
			<CarouselSingleProductPage
				slides={slides}
				setActiveSlide={setActiveSlide}
				autoForwardSlide={autoForwardSlide}
				autoBackwardSlide={autoBackwardSlide}
			/>
			<CarouselProductPage
				slides={slides}
				activeSlide={activeSlide}
				activeIndexCarouselProduct={activeIndexCarouselProduct}
				setActiveIndexCarouselProduct={setActiveIndexCarouselProduct}
				productPageRef={productPage}
			/>
		</section>
	);
}
