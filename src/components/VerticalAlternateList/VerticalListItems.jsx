import React from 'react';
import { CategoryPictureListItem } from './CategoryPictureListItem';
import { PictureCategoryListItem } from './PictureCategoryListItem';

export function VerticalListItems() {
	return (
		<div className='w-11/12 block mx-auto mt-5 border-x-2'>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				categoryName='category'
				categoryNumber='1'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				categoryName='category'
				categoryNumber='2'
			/>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				categoryName='category'
				categoryNumber='3'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				categoryName='category'
				categoryNumber='4'
			/>
		</div>
	);
}
