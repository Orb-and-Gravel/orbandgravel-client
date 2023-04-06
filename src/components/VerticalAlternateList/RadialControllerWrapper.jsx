import React from 'react';
import { Radial } from './Radial';

export function RadialControllerWrapper() {
	return (
		<div className='flex md:mt-10 md:justify-between justify-center mt-7'>
			<section className='md:block hidden'>
				<Radial />
			</section>
			<h3 className='xl:text-[6rem] min-[860px]:text-[4rem] md:text-4xl md:font-black md:font-oswald text-colorFive min-[860px]:mt-20 2xl:mr-24 xl:mr-20 md:mr-10 whitespace-nowrap text-5xl font-black font-poiret tracking-tight'>
				NEW IN.
			</h3>
		</div>
	);
}
