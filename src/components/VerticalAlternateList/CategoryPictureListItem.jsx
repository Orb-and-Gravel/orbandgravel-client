import React from 'react';

export function CategoryPictureListItem({
	categoryNumber,
	categoryName,
	imageSrc,
	alt,
}) {
	return (
		<div className='grid grid-cols-2'>
			<div className='flex justify-between items-end p-4 h-[250px]'>
				<p>{categoryName}</p>
				<h3 className='text-7xl font-roboto font-bold opacity-40'>
					{categoryNumber}
				</h3>
			</div>
			<img
				src={imageSrc}
				alt={alt}
				className='object-cover h-[250px]'
				loading='lazy'
			/>
		</div>
	);
}
