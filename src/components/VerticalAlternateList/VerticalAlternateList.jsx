import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { RadialControllerWrapper } from './RadialControllerWrapper';
import { VerticalListWrapper } from './VerticalListWrapper';

export function VerticalAlternateList() {
	const [categoriesIndex, setCategoriesIndex] = useState(0);

	return (
		<div className='md:grid md:grid-cols-2 mt-10'>
			<aside>
				<RadialControllerWrapper
					categoriesIndex={categoriesIndex}
					setCategoriesIndex={setCategoriesIndex}
				/>
			</aside>
			<aside className='h-[1000px] overflow-hidden'>
				<VerticalListWrapper categoriesIndex={categoriesIndex} />
			</aside>
		</div>
	);
}
