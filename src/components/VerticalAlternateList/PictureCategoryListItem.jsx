import React from 'react';

export function PictureCategoryListItem({
	imageSrc,
	categoryName,
	categoryNumber,
}) {
	return (
		<div className='grid grid-cols-2'>
			<img src={imageSrc} alt='' className='object-cover' />
			<div className='flex justify-between items-end p-4'>
				<p>{categoryName}</p>
				<h3 className='text-7xl font-roboto font-bold opacity-40'>
					{categoryNumber}
				</h3>
			</div>
		</div>
	);
}
