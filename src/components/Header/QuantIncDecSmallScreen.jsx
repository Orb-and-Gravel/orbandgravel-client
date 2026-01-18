import { PlayIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useUpdateCartItemQuantity } from '../../query/hooks/useCart';

export function QuantIncDecSmallScreen({ quantity, price, cartId, itemId }) {
	const {
		mutate: updateCartItemQuantityMutation,
		isPending: updateCartItemQuantityIsPending,
	} = useUpdateCartItemQuantity();

	function handleQuantityChange(action) {
		updateCartItemQuantityMutation({ cartId, itemId, action });
	}

	return (
		<div className='flex items-center'>
			<div className='flex border border-colorThree justify-between bg-white items-center w-32'>
				<button
					className={`bg-colorFour p-1 ${
						updateCartItemQuantityIsPending
							? 'opacity-50 cursor-not-allowed'
							: 'hover:bg-colorThree'
					}`}
					disabled={updateCartItemQuantityIsPending}
					onClick={() => handleQuantityChange('decrement')}
				>
					<PlayIcon className='w-5 text-colorOne rotate-90 p-0.5' />
				</button>
				<div>
					<p className='font-bold text-lg text-colorFive'>{quantity}</p>
				</div>
				<button
					className={`p-1 bg-colorFour ${
						updateCartItemQuantityIsPending
							? 'opacity-50 cursor-not-allowed'
							: 'hover:bg-colorThree'
					}`}
					disabled={updateCartItemQuantityIsPending}
					onClick={() => handleQuantityChange('increment')}
				>
					<PlayIcon className='w-5 text-colorOne -rotate-90 p-0.5' />
				</button>
			</div>
		</div>
	);
}
