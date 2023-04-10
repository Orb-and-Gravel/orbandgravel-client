import React, { useEffect, useRef, useState } from 'react';
import { RadialControllerWrapper } from './RadialControllerWrapper';
import { VerticalListWrapper } from './VerticalListWrapper';

export function VerticalAlternateList() {
	const [categoriesIndex, setCategoriesIndex] = useState(0);

	return (
		<div
			className={`md:grid md:grid-cols-2 mt-10 overflow-hidden max-h-[1000px]`}
		>
			<aside>
				<RadialControllerWrapper
					categoriesIndex={categoriesIndex}
					setCategoriesIndex={setCategoriesIndex}
				/>
			</aside>
			<aside className='block h-1/5 overflow-hidden'>
				<VerticalListWrapper categoriesIndex={categoriesIndex} />
			</aside>
		</div>
	);
}
