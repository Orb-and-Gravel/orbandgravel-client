import React from 'react';
import { VerticalListItems } from './VerticalListItems';

export function VerticalListWrapper({ categoriesIndex }) {
	return (
		<div className='w-fit sm:w-full mx-auto h-full sm:m-0 overflow-hidden'>
			<VerticalListItems categoriesIndex={categoriesIndex} />
		</div>
	);
}
