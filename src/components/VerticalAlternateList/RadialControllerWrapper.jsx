import React from 'react';
import { Radial } from './Radial';

export function RadialControllerWrapper() {
	return (
		<div className='flex mt-10 justify-between'>
			<section className='md:block hidden'>
				<Radial />
			</section>
			<h3 className='xl:text-[6rem] min-[860px]:text-[4rem] md:text-4xl font-black font-oswald text-colorFive min-[860px]:mt-20 2xl:mr-24 xl:mr-20 md:mr-10 whitespace-nowrap'>
				NEW IN.
			</h3>
		</div>
	);
}
