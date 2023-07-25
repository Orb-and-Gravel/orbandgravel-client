import React from 'react';

export function DropdownMenu({ children }) {
	return (
		<ul className='absolute bg-[#ffffffed] border-colorThree border z-50 right-0 top-8 rounded-md p-2'>
			{children}
		</ul>
	);
}
