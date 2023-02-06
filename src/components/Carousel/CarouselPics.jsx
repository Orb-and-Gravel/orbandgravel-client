import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export function CarouselPics({ children }) {
	const [activeIndex, setActiveIndex] = React.useState(0);

	function updateIndex(newIndex) {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}
		setActiveIndex(newIndex);
	}

	return (
		<section className='flex justify-between'>
			<button onClick={() => updateIndex(activeIndex - 1)}>
				<ArrowLeftIcon className='w-12 h-12 transition-all text-colorThree hover:text-colorOne' />
			</button>
			<div className='overflow-hidden mx-20 w-full'>
				<div
					className='whitespace-nowrap transition-transform duration-300'
					style={{ transform: `translateX(-${activeIndex * 250}px)` }}
				>
					{React.Children.map(children, (child, index) => {
						return React.cloneElement(child, { width: '300px' });
					})}
				</div>
			</div>
			<button onClick={() => updateIndex(activeIndex + 1)}>
				<ArrowRightIcon className='w-12 h-12 transition-all text-colorThree hover:text-colorOne' />
			</button>
		</section>
	);
}
