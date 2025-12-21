import React from 'react';
// import cartItems from '../../assets/cartItems.json';
import { CartDropdownMenuItemSmallScreen } from './CartDropdownMenuItemSmallScreen';
import { TotalPriceCartSmallScreen } from './TotalPriceCartSmallScreen';
import { useSelector } from 'react-redux';
import { useGetCart } from '../../query/hooks/useCart';

export function CartDropdownMenuSmallScreen() {
	const { guestHash } = useSelector((state) => state.user);
	const { data: cartData } = useGetCart(guestHash);
	return (
		<ul className='absolute w-full bg-white/90 backdrop-blur-sm'>
			<hr className='border-colorTwo' />
			{cartData?.data?.message?.items?.map((item) => (
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
