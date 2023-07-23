import React from 'react';

export function DropdownMenuItem({ children, ...props }) {
	return (
		<>
			{props.href ? (
				<a
					href={props.href}
					className='flex w-full justify-between text-colorFive hover:text-colorFour hover:bg-colorHeader px-3 py-1.5'
				>
					{children}
				</a>
			) : (
				<button
					onClick={props.onClick}
					className='flex w-full justify-between text-colorFive hover:text-colorFour hover:bg-colorHeader px-3 py-1.5'
				>
					{children}
				</button>
			)}
		</>
	);
}
