import React from 'react';
import { Radial } from './Radial';

export function RadialControllerWrapper() {
	return (
		<div className='flex '>
			<Radial />
			<h3 className='text-[6rem] font-black font-oswald text-colorFive'>
				NEW IN
			</h3>
		</div>
	);
}
