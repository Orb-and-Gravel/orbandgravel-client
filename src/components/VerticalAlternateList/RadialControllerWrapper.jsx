import React from 'react';
import { Radial } from './Radial';

export function RadialControllerWrapper() {
	return (
		<div className='flex mt-10'>
			<Radial />
			<h3 className='text-[6rem] font-black font-oswald text-colorFive xl:ml-20 whitespace-nowrap'>
				NEW IN.
			</h3>
		</div>
	);
}
