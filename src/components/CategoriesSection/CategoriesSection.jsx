import React from 'react';

export function CategoriesSection() {
	return (
		<div className='flex-[1_0_0%] flex justify-between mt-10'>
			<img
				src='https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
				alt=''
				className='mt-20'
			/>
			<div>
				<h3>Shop by Category</h3>
			</div>
			<div>
				<img
					src='https://images.unsplash.com/photo-1599459183200-59c7687a0275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'
					alt=''
					className='mt-40'
				/>
			</div>
		</div>
	);
}
