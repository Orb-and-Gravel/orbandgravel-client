import React from 'react';
import { CategoryPictureListItem } from './CategoryPictureListItem';
import { PictureCategoryListItem } from './PictureCategoryListItem';

export function VerticalListItems({ categoriesIndex }) {
	return (
		<div
			className='w-fit mx-auto border-x-2'
			style={{
				transform: `translateY(${categoriesIndex * -20}%)`,
				transition: 'transform 0.5s ease-in-out',
			}}
		>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='1'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='2'
			/>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='3'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='4'
			/>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='5'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='6'
			/>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='7'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='8'
			/>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='9'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='10'
			/>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='11'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='12'
			/>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='13'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='14'
			/>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='15'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='16'
			/>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='17'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='18'
			/>
			<CategoryPictureListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='19'
			/>
			<PictureCategoryListItem
				imageSrc='https://images.unsplash.com/photo-1665159882377-385d68d2bdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
				alt='alt img'
				categoryName='category'
				categoryNumber='20'
			/>
		</div>
	);
}
