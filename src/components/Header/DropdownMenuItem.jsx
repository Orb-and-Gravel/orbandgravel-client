import React from 'react';

export function DropdownMenuItem({ children, ...props }) {
	return (
		<li>
			{props.href ? (
				<a
					href={props.href}
					className='flex w-full justify-between text-colorFive hover:text-colorFour hover:bg-colorHeader px-3 py-1.5 gap-x-6 whitespace-nowrap'
				>
					{children}
				</a>
			) : (
				<button
					onClick={props.onClick}
					className='flex w-full justify-between text-colorFive hover:text-colorFour hover:bg-colorHeader px-3 py-1.5 gap-x-6 whitespace-nowrap'
				>
					{children}
				</button>
			)}
		</li>
	);
}
