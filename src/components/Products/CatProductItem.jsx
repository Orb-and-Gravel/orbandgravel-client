import React, { useState } from 'react';
import { Rating } from '../Rating/Rating';

export function CatProductItem({ product }) {
	const [colorVariant, setColorVariant] = useState(0);

	return (
		<div className='max-w-sm relative'>
			<div className='absolute top-4 left-4 z-10'>
				{product.variation && (
					<ColorCatProduct
						setColorVariant={setColorVariant}
						colorVariant={colorVariant}
						headlineImages={product.headlineImages}
					/>
				)}
			</div>
			<a href={`/product/${product.slug}`}>
				<img
					src={product.headlineImages[colorVariant].image.imgLink}
					alt=''
					className='object-cover rounded-2xl h-96 w-80'
				/>
				<span className='flex justify-between mt-3'>
					<p className='text-lg font-medium text-colorFive'>{product.name}</p>
					<h6 className='text-2xl text-colorThree font-bold'>
						PKR {product.price}
					</h6>
				</span>
			</a>
			<div className='w-36'>
				<Rating reviewsOverview={product.reviewsOverview} />
			</div>
		</div>
	);
}

function ColorCatProduct({ setColorVariant, colorVariant, headlineImages }) {
	return (
		<div className='flex gap-x-2'>
			{headlineImages.map((image, key) => (
				<button
					className={`h-4 w-4 rounded-full ${
						colorVariant === key &&
						'outline-1 outline-offset-2 outline-colorFour outline'
					}`}
					style={{ backgroundColor: image.color }}
					onClick={() => setColorVariant(key)}
				/>
			))}
		</div>
	);
}
