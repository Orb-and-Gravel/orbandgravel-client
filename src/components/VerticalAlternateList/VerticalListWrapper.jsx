import React, { useEffect, useRef } from 'react';
import { VerticalListItems } from './VerticalListItems';

export function VerticalListWrapper({ categoriesIndex }) {
	const childRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		if (containerRef.current && childRef.current) {
			containerRef.current.style.height = `${
				childRef.current.offsetHeight * 4
			}px`;
		}
	}, []);

	return (
		<div
			className='w-fit mx-auto sm:w-full sm:m-0 overflow-hidden border-t-[1.5rem] border-transparent'
			ref={containerRef}
		>
			<VerticalListItems
				childRef={childRef}
				categoriesIndex={categoriesIndex}
				offsetHeight={containerRef?.current?.offsetHeight}
			/>
		</div>
	);
}
