import { XMarkIcon } from '@heroicons/react/24/outline';
import { QuantIncDec } from './QuantIncDec';
import { useDeleteCartProduct } from '../../query/hooks/useCart';

export function DropdownMenuCartItem({ item, key, cartId }) {
	const { mutate: deleteCartMutate, isPending: deleteCartIsPending } =
		useDeleteCartProduct();
	return (
		<li key={key} className='w-[350px]'>
			<div
				className={`flex gap-x-4 p-2 hover:bg-colorHeader ${
					deleteCartIsPending && 'opacity-50 pointer-events-none'
				}`}
			>
				<div className='w-14'>
					<img
						src={item.product.headlineImages[0].image.imgLink}
						alt={item.product.headlineImages[0].image.alt}
						className='rounded w-full h-full object-cover'
						loading='lazy'
					/>
				</div>
				<div className='mt-1'>
					<p className='whitespace-nowrap tracking-wide text-colorFour'>
						{item.product.name}
					</p>
					<div className='flex items-center gap-2 my-1'>
						<span className={`text-xs text-colorThree tracking-wide ${item.color?.color ? 'block' : 'hidden'}`}>Color:</span>
						<div
							className='h-4 w-6 rounded-lg flex-shrink-0'
							style={{ backgroundColor: item.color.color }}
							title={item.color.color}
						/>
					</div>
					<div className='mt-2'>
						<QuantIncDec
							quantity={item.quantity}
							price={item.productTotalPrice}
							cartId={cartId}
							itemId={item._id}
						/>
					</div>
				</div>
				<div className='ml-auto mt-1'>
					<XMarkIcon
						className='w-4 text-colorFour cursor-pointer'
						onClick={() => deleteCartMutate({ cartId, itemId: item._id })}
					/>
				</div>
			</div>
		</li>
	);
}
