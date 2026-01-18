import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { QuantIncDecSmallScreen } from './QuantIncDecSmallScreen';
import { useDeleteCartProduct } from '../../query/hooks/useCart';

export function CartDropdownMenuItemSmallScreen({ item, cartId }) {
	const { mutate: deleteCartMutate, isPending: deleteCartIsPending } =
		useDeleteCartProduct();

	return (
		<li className='flex justify-between w-full p-4'>
			<div
				className={`flex justify-between w-full items-center ${
					deleteCartIsPending && 'opacity-50 pointer-events-none'
				}`}
			>
				<div className='flex'>
					<div className='max-w-[80px] min-w-[80px]'>
						<img
							src={item.product.headlineImages[0].image.imgLink}
							alt={item.product.headlineImages[0].image.alt}
							className='rounded w-full h-full object-cover'
							loading='lazy'
						/>
					</div>
					<div className='ml-5 space-y-3 max-w-[200px] my-auto'>
						<h2 className='text-xl text-colorFour tracking-wide'>
							{item.product.name}
						</h2>
						<div className='flex items-center gap-2'>
							<span
								className={`text-xs text-colorThree tracking-wide ${
									item.color?.color ? 'block' : 'hidden'
								}`}
							>
								Color:
							</span>
							<div
								className='h-4 w-6 rounded-lg flex-shrink-0'
								style={{ backgroundColor: item.color?.color }}
								title={item.color?.color}
							/>
						</div>
						<QuantIncDecSmallScreen
							quantity={item.quantity}
							price={item.productTotalPrice}
							cartId={cartId}
							itemId={item._id}
						/>
					</div>
				</div>
				<div className='mr-2'>
					<h2 className='text-lg text-colorThree font-bold whitespace-nowrap'>
						PKR {item.productTotalPrice}
					</h2>
				</div>
			</div>
			<div>
				<XMarkIcon
					className='w-5 text-colorFour cursor-pointer'
					onClick={() => deleteCartMutate({ cartId, itemId: item._id })}
				/>
			</div>
		</li>
	);
}
