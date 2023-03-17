import React from 'react';
import { RadialControllerWrapper } from './RadialControllerWrapper';
import { VerticalListWrapper } from './VerticalListWrapper';

export function VerticalAlternateList() {
	return (
		<div className='grid grid-cols-2'>
			<aside>
				<RadialControllerWrapper />
			</aside>
			<aside>
				<VerticalListWrapper />
			</aside>
		</div>
	);
}
