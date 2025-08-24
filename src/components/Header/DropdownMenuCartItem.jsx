import { XMarkIcon } from '@heroicons/react/24/outline';
import { QuantIncDec } from './QuantIncDec';

export function DropdownMenuCartItem({ item, key, cartId }) {
	return (
		<li key={key}>
			<div className='flex gap-x-4 p-2 hover:bg-colorHeader'>
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
							productId={item.product._id}
						/>
					</div>
				</div>
				<div className='ml-14 mt-1'>
					<XMarkIcon className='w-4 text-colorFour cursor-pointer' />
				</div>
			</div>
		</li>
	);
}
