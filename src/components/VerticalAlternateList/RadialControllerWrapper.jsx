import React from 'react';
import { Radial } from './Radial';

export function RadialControllerWrapper({
	categoriesIndex,
	setCategoriesIndex,
}) {
	return (
		<div className='flex md:mt-10 md:justify-between justify-center mt-7 relative'>
			<section className='md:block hidden'>
				<Radial catIndex={categoriesIndex} setCatIndex={setCategoriesIndex} />
			</section>
			<h3 className='md:text-4xl lg:text-6xl md:font-black md:font-oswald text-colorFive whitespace-nowrap text-5xl font-black font-poiret tracking-tight h-fit md:absolute z-50 left-[140px] lg:left-[150px] xl:left-[200px] 2xl:left-80'>
				NEW IN.
			</h3>
		</div>
	);
}
