import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useSwipeable } from 'react-swipeable';

export function CarouselSinglePicsProductPage({
	children,
	setActiveSlide,
	activeSlide,
}) {
	const swipeCarousel = (updatedIndex) => {
		const container = document.querySelector('.container');
		const allItems = getComputedStyle(container);
		const itemsDisplayed = allItems.getPropertyValue('--img-count-single');

		let totalIndex = Math.floor(
			(children.length - 1) / parseInt(itemsDisplayed)
		);
		if (updatedIndex < 0) {
			setActiveSlide(0);
		} else if (updatedIndex > totalIndex) {
			setActiveSlide(totalIndex);
		} else {
			setActiveSlide(updatedIndex);
		}
	};

	const swipe = useSwipeable({
		onSwipedLeft: () => swipeCarousel(activeSlide + 1),
		onSwipedRight: () => swipeCarousel(activeSlide - 1),
	});

	return (
		<section {...swipe} className='flex overflow-hidden w-fit'>
			<div className='bg-white z-10 flex items-center'>
				<button
					onClick={() => {
						swipeCarousel(activeSlide - 1);
					}}
					className='h-fit'
				>
					<ArrowLeftIcon className='md:w-6 md:h-6 w-4 h-4 transition-all text-colorFive bg-colorOne rounded-full' />
				</button>
			</div>
			<div className='container flex w-full'>
				<div
					style={{
						transform: `translateX(${activeSlide * -100}%)`,
						transition: 'transform 0.5s ease-in-out',
						width: '100%',
						display: 'flex',
					}}
				>
					{React.Children.map(children, (child, index) => {
						return React.cloneElement(child);
					})}
				</div>
			</div>
			<div className='bg-white z-10 flex items-center'>
				<button
					onClick={() => {
						swipeCarousel(activeSlide + 1);
					}}
					className='h-fit'
				>
					<ArrowRightIcon className='md:w-6 md:h-6 w-4 h-4 transition-all text-colorFive bg-colorOne rounded-full' />
				</button>
			</div>
		</section>
	);
}
