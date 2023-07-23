import React from 'react';

export function DropdownMenu({ children }) {
	return (
		<div className='absolute bg-[#ffffffed] border-colorThree border z-50 right-0 top-8 rounded-md w-44 p-2'>
			{children}
		</div>
	);
}
