import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useSwipeable } from 'react-swipeable';

export function CarouselPics({ children }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const swipeCarousel = (updatedIndex) => {
		const container = document.querySelector('.container');
		const allItems = getComputedStyle(container);
		const itemsDisplayed = allItems.getPropertyValue('--img-count');

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
	};

	const swipe = useSwipeable({
		onSwipedLeft: () => swipeCarousel(activeIndex + 1),
		onSwipedRight: () => swipeCarousel(activeIndex - 1),
	});

	return (
		<section {...swipe} className='flex overflow-hidden w-fit'>
			<button
				onClick={() => swipeCarousel(activeIndex - 1)}
				className='md:block hidden z-10 bg-colorFive px-8 hover:bg-colorFour transition-all'
			>
				<ArrowLeftIcon className='w-12 h-12 transition-all text-colorOne' />
			</button>
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
			<button
				onClick={() => swipeCarousel(activeIndex + 1)}
				className='md:block hidden bg-colorFive z-10 px-8 transition-all hover:bg-colorFour'
			>
				<ArrowRightIcon className='w-12 h-12 transition-all text-colorOne' />
			</button>
		</section>
	);
}
