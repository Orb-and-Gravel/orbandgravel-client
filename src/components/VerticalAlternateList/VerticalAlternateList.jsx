import React from 'react';
import { RadialControllerWrapper } from './RadialControllerWrapper';
import { VerticalListWrapper } from './VerticalListWrapper';

export function VerticalAlternateList() {
	return (
		<div className='md:grid md:grid-cols-2'>
			<aside>
				<RadialControllerWrapper />
			</aside>
			<aside className='block'>
				<VerticalListWrapper />
			</aside>
		</div>
	);
}
