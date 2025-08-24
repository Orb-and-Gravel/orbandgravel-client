import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useUpdateCartItemQuantity } from '../../query/hooks/useCart';

export function QuantIncDec({ quantity, price, cartId, productId }) {
	const {
		mutate: updateCartItemQuantityMutation,
		isPending: updateCartItemQuantityIsPending,
	} = useUpdateCartItemQuantity();

	function handleQuantityChange(action) {
		updateCartItemQuantityMutation({ cartId, productId, action });
	}

	return (
		<div className='flex items-center'>
			<div className='flex bg-white'>
				<button
					className={`border border-colorFour rounded-l px-1 ${
						updateCartItemQuantityIsPending
							? 'opacity-50 cursor-not-allowed'
							: 'hover:bg-colorOne'
					}`}
					disabled={updateCartItemQuantityIsPending}
					onClick={() => handleQuantityChange('increment')}
				>
					<PlusIcon className='w-4 text-colorFive' />
				</button>
				<p className='border border-colorFour border-l-0 border-r-0 px-2 text-sm leading-6 font-bold text-colorFive'>
					{quantity}
				</p>
				<button
					className={`border border-colorFour rounded-r px-1 ${
						updateCartItemQuantityIsPending
							? 'opacity-50 cursor-not-allowed'
							: 'hover:bg-colorOne'
					}`}
					disabled={updateCartItemQuantityIsPending}
					onClick={() => handleQuantityChange('decrement')}
				>
					<MinusIcon className='w-4 text-colorFive' />
				</button>
			</div>
			<p className='ml-3 font-bold text-colorThree whitespace-nowrap'>
				PKR {price * quantity}
			</p>
		</div>
	);
}
