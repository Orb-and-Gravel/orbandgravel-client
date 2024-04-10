import React from 'react';

export function Modal({ open, heading, description, onCancel, onConfirm }) {
	return (
		<div
			className={`fixed inset-0 z-50 bg-opacity-25 bg-black w-full h-full ${
				open ? 'flex' : 'hidden'
			} items-center justify-center`}
		>
			<div className='bg-white border border-colorThree rounded-lg w-[400px] py-2 px-4'>
				<h3 className='font-bold text-lg text-colorFour mb-2'>{heading}</h3>
				<p>{description}</p>
				<div className='flex gap-x-3 justify-end mt-5'>
					<button
						className='bg-white border-colorTwo border text-colorFive w-16 text-xs py-2 rounded-md hover:scale-105 transition-all'
						onClick={onCancel}
					>
						Cancel
					</button>
					<button
						className='bg-colorFive text-colorOne w-16 text-xs py-2 rounded-md hover:scale-105 transition-all'
						onClick={onConfirm}
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}
