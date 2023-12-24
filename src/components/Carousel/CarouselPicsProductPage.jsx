import React, { forwardRef, useImperativeHandle } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useSwipeable } from 'react-swipeable';

const CarouselPicsProductPage = forwardRef(function (
	{ children, activeIndex, setActiveIndex },
	ref
) {
	function computeItemsToDisplay() {
		const container = document.querySelector('.container');
		const allItems = getComputedStyle(container);
		const itemsDisplayed = allItems.getPropertyValue('--img-count');
		return itemsDisplayed;
	}

	function swipeCarousel(updatedIndex) {
		const itemsDisplayed = computeItemsToDisplay();

		let totalIndex = Math.floor(
			(children.length - 1) / parseInt(itemsDisplayed)
		);
		if (updatedIndex < 0) {
			setActiveIndex(0);
		} else if (updatedIndex > totalIndex) {
			setActiveIndex(totalIndex);
		} else {
			setActiveIndex(updatedIndex);
		}
	}
	useImperativeHandle(ref, () => ({
		moveCarousel(ai) {
			swipeCarousel(ai);
		},
	}));

	const swipe = useSwipeable({
		onSwipedLeft: () => swipeCarousel(activeIndex + 1),
		onSwipedRight: () => swipeCarousel(activeIndex - 1),
	});

	return (
		<section {...swipe} className='flex overflow-hidden w-fit'>
			<div className='bg-white z-10 flex items-center'>
				<button
					onClick={() => swipeCarousel(activeIndex - 1)}
					className='h-fit'
				>
					<ArrowLeftIcon className='w-6 h-6 transition-all text-colorFive bg-colorOne rounded-full' />
				</button>
			</div>
			<div className='container flex w-full'>
				<div
					style={{
						transform: `translateX(${activeIndex * -100}%)`,
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
					onClick={() => swipeCarousel(activeIndex + 1)}
					className='h-fit'
				>
					<ArrowRightIcon className='w-6 h-6 transition-all text-colorFive bg-colorOne rounded-full' />
				</button>
			</div>
		</section>
	);
});

export default CarouselPicsProductPage;
