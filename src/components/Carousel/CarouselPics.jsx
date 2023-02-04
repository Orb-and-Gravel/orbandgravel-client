import React from 'react';

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
		<section className='overflow-hidden'>
			<div
				className='whitespace-nowrap transition-transform duration-300'
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child, { width: '100%' });
				})}
			</div>
			<div className='flex justify-center'>
				<button className='m-3' onClick={() => updateIndex(activeIndex - 1)}>
					Prev
				</button>
				<button className='m-3' onClick={() => updateIndex(activeIndex + 1)}>
					Next
				</button>
			</div>
		</section>
	);
}
