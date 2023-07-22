import React from 'react';

export function DropdownMenuItem({ children }) {
	return (
		<button className='flex w-full justify-between text-colorFive hover:text-colorFour hover:bg-colorHeader px-3 py-1.5'>
			{children}
		</button>
	);
}
