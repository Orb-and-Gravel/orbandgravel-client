import React from 'react';
import cartItems from '../../assets/cartItems.json';
import { CartDropdownMenuItemSmallScreen } from './CartDropdownMenuItemSmallScreen';
import { TotalPriceCartSmallScreen } from './TotalPriceCartSmallScreen';

export function CartDropdownMenuSmallScreen() {
	return (
		<ul className='absolute w-full bg-white/90 backdrop-blur-sm'>
			<hr className='border-colorTwo' />
			{cartItems.map((item) => (
				<React.Fragment key={item.name}>
					<CartDropdownMenuItemSmallScreen item={item} />
					<hr className='border-colorTwo' />
				</React.Fragment>
			))}
			<TotalPriceCartSmallScreen />
			<hr className='border-colorTwo' />
		</ul>
	);
}
