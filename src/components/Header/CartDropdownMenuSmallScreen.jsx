import React from 'react';
import { CartDropdownMenuItemSmallScreen } from './CartDropdownMenuItemSmallScreen';
import { TotalPriceCartSmallScreen } from './TotalPriceCartSmallScreen';

export function CartDropdownMenuSmallScreen({ cartData }) {
	return (
		<ul className='absolute w-full bg-white/90 backdrop-blur-sm'>
			<hr className='border-colorTwo' />
			{cartData?.data?.message?.items?.map((item) => (
				<React.Fragment key={item._id || item.name}>
					<CartDropdownMenuItemSmallScreen
						item={item}
						cartId={cartData?.data?.message?._id}
					/>
					<hr className='border-colorTwo' />
				</React.Fragment>
			))}
			<TotalPriceCartSmallScreen
				totalPrice={cartData?.data?.message?.totalAmount ?? 0}
			/>
			<hr className='border-colorTwo' />
		</ul>
	);
}
