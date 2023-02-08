import React, { useRef, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useSwipeable } from 'react-swipeable';

export function CarouselPics({ children }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const carouselContainerRef = useRef(null);

	function updateIndex(newIndex) {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}
		setActiveIndex(newIndex);
	}

	const swipe = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1),
	});

	return (
		<section {...swipe} className='flex justify-between items-center'>
			<button
				onClick={() => updateIndex(activeIndex - 1)}
				className='h-fit md:block hidden'
			>
				<ArrowLeftIcon className='w-12 h-12 transition-all text-colorThree hover:text-colorOne' />
			</button>
			<div
				className='overflow-hidden xl:mx-20 lg:mx-14 md:mx-6 sm:mx-2 w-full'
				ref={carouselContainerRef}
			>
				<div
					className='whitespace-nowrap transition-transform duration-300'
					style={{ transform: `translateX(-${activeIndex * 312}px)` }}
				>
					{React.Children.map(children, (child, index) => {
						return React.cloneElement(child, { width: '300px' });
					})}
				</div>
			</div>
			<button
				onClick={() => updateIndex(activeIndex + 1)}
				className='h-fit md:block hidden'
			>
				<ArrowRightIcon className='w-12 h-12 transition-all text-colorThree hover:text-colorOne' />
			</button>
		</section>
	);
}
