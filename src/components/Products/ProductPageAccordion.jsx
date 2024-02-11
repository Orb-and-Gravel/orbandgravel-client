import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useRef, useState } from 'react';

export function ProductPageAccordion({ accordionDetails, accordionName }) {
	const [drop, setDrop] = useState(false);
	const divRef = useRef(null);
	const [height, setHeight] = useState(null);
	useEffect(() => {
		setHeight(divRef?.current?.clientHeight);
	});
	return (
		<React.Fragment>
			<div
				className='flex items-center justify-between mt-6 text-colorFive px-2 cursor-pointer'
				onClick={() => setDrop((prev) => !prev)}
			>
				<h3>{accordionName}</h3>
				{drop ? <MinusIcon className='w-6' /> : <PlusIcon className='w-6' />}
			</div>
			<div
				className='overflow-hidden transition-[height] duration-300'
				style={{
					height: drop ? height : 0,
				}}
			>
				<div
					ref={divRef}
					className='px-3 pt-3'
					dangerouslySetInnerHTML={{ __html: accordionDetails }}
				/>
			</div>
		</React.Fragment>
	);
}
