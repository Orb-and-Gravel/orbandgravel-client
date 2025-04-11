import React, { useEffect } from 'react';

export function Alert({ open, setOpen, heading, description }) {
	useEffect(() => {
		const timeId = setTimeout(() => {
			setOpen(false);
		}, 3000);
		return () => {
			clearTimeout(timeId);
		};
	}, [open]);

	if (!open) return null;

	return (
		<div
			className={`fixed inset-0 z-50 w-full h-full ${
				open ? 'flex' : 'hidden'
			} items-center justify-center`}
		>
			<div className='bg-white border border-colorThree rounded-lg w-[400px] p-4 mx-2'>
				<h3 className='font-bold text-lg text-colorFour mb-2'>{heading}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}
