import React from 'react';
import { Radial } from './Radial';
import {
	ArrowUpCircleIcon,
	ArrowDownCircleIcon,
} from '@heroicons/react/24/outline';

export function RadialControllerWrapper({
	categoriesIndex,
	setCategoriesIndex,
}) {
	function handleCategoryMovement(move) {
		if (move === 'increment') {
			if (categoriesIndex < 4) {
				setCategoriesIndex(categoriesIndex + 1);
			}
		} else if (move === 'decrement') {
			if (categoriesIndex > 0) {
				setCategoriesIndex(categoriesIndex - 1);
			}
		}
	}
	return (
		<div className='relative'>
			<div className='flex flex-1 md:mt-10 md:justify-between justify-center mt-7 relative'>
				<section className='md:block hidden'>
					<Radial catIndex={categoriesIndex} setCatIndex={setCategoriesIndex} />
				</section>
				<h3 className='md:text-4xl lg:text-6xl md:font-oswald text-colorFive whitespace-nowrap text-5xl font-black font-poiret tracking-tight h-fit md:absolute z-50 left-[140px] lg:left-[150px] xl:left-[200px] 2xl:left-80'>
					NEW IN.
				</h3>
			</div>
			<section className='absolute right-0 top-2 md:hidden'>
				<div className='flex w-16 justify-between mr-2'>
					<ArrowUpCircleIcon
						className={`w-6 text-colorFour ${
							categoriesIndex === 0 && 'opacity-50'
						}`}
						onClick={() => handleCategoryMovement('decrement')}
					/>
					<ArrowDownCircleIcon
						className={`w-6 text-colorFour ${
							categoriesIndex === 4 && 'opacity-50'
						}`}
						onClick={() => handleCategoryMovement('increment')}
					/>
				</div>
			</section>
		</div>
	);
}
