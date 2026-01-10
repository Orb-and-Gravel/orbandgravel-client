import { XMarkIcon } from '@heroicons/react/24/outline';
import { QuantIncDec } from './QuantIncDec';
import { useDeleteCartProduct } from '../../query/hooks/useCart';

export function DropdownMenuCartItem({ item, key, cartId }) {
	const { mutate: deleteCartMutate, isPending: deleteCartIsPending } =
		useDeleteCartProduct();
	return (
		<li key={key}>
			<div
				className={`flex gap-x-4 p-2 hover:bg-colorHeader ${
					deleteCartIsPending && 'opacity-50 pointer-events-none'
				}`}
			>
				<div className='w-14'>
					<img
						src={item.product.headlineImages[0].image.imgLink}
						alt={item.product.headlineImages[0].image.alt}
						className='rounded'
						loading='lazy'
					/>
				</div>
				<div className='mt-1'>
					<p className='whitespace-nowrap tracking-wide text-colorFour'>
						{item.product.name}
					</p>
					<div className='mt-4'>
						<QuantIncDec
							quantity={item.quantity}
							price={item.productTotalPrice}
							cartId={cartId}
							itemId={item._id}
						/>
					</div>
				</div>
				<div className='ml-14 mt-1'>
					<XMarkIcon
						className='w-4 text-colorFour cursor-pointer'
						onClick={() => deleteCartMutate({ cartId, itemId: item._id })}
					/>
				</div>
			</div>
		</li>
	);
}
