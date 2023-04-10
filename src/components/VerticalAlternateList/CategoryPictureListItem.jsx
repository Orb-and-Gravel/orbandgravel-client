import React from 'react';

export function CategoryPictureListItem({
	categoryNumber,
	categoryName,
	imageSrc,
}) {
	return (
		<div className='grid grid-cols-2'>
			<div className='flex justify-between items-end p-4'>
				<p>{categoryName}</p>
				<h3 className='text-7xl font-roboto font-bold opacity-40'>
					{categoryNumber}
				</h3>
			</div>
			<img src={imageSrc} alt='' className='object-cover' />
		</div>
	);
}
