import React, { useEffect } from 'react';
import Searchbar from './Searchbar';
import {
	UserIcon,
	ShoppingBagIcon,
	XMarkIcon,
	Bars3Icon,
	UserCircleIcon,
	ChartBarSquareIcon,
	HeartIcon,
} from '@heroicons/react/24/outline';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useRef, useState } from 'react';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem } from './DropdownMenuItem';
import cartItems from '../../assets/cartItems.json';
import { DropdownMenuCartItem } from './DropdownMenuCartItem';
import { TotalPriceCart } from './TotalPriceCart';

const Header = ({
	setOpenNav,
	openNav,
	setOpenCartDropdown,
	openCartDropdown,
	cartRef,
}) => {
	const iconRef = useRef(null);
	const cartIconRef = useRef(null);
	const profileIconRef = useRef(null);
	const cartDropdownRef = useRef(null);
	const [openProfileDropdown, setOpenProfileDropdown] = useState(false);

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	function handleOutsideClick(event) {
		if (
			!cartIconRef.current.contains(event.target) &&
			!cartDropdownRef.current?.contains(event.target) &&
			!cartRef.current?.contains(event.target)
		) {
			setOpenCartDropdown(false);
		}
		if (!profileIconRef.current.contains(event.target)) {
			setOpenProfileDropdown(false);
		}
	}

	return (
		<header className='bg-colorHeader min-w-full h-24 sm:h-28 flex items-center justify-between'>
			<div className='flex-[1_0_0%] sm:flex justify-center hidden'>
				<Searchbar />
			</div>
			<div className='flex-[1_0_0%] flex sm:justify-center object-contain sm:ml-0 ml-1'>
				<a href='/'>
					<img
						src='/ong-logo.png'
						alt='Orb & Gravel'
						width={250}
						height={250}
					/>
				</a>
			</div>
			<div className='flex flex-[1_0_0%] justify-center'>
				<span className='mr-5'>
					<div className='relative'>
						<UserIcon
							className='h-6 w-6 hover:text-colorThree text-colorFour transition-all cursor-pointer'
							onClick={() => setOpenProfileDropdown((prev) => !prev)}
							ref={profileIconRef}
						/>
						{openProfileDropdown && (
							<DropdownMenu>
								<DropdownMenuItem href='account'>
									<p>Account</p>
									<UserCircleIcon className='h-6 w-6' />
								</DropdownMenuItem>
								<DropdownMenuItem href='orderhistory'>
									<p>Order History</p>
									<ChartBarSquareIcon className='h-6 w-6' />
								</DropdownMenuItem>
								<DropdownMenuItem href='wishlist'>
									<p>Wishlist</p>
									<HeartIcon className='h-6 w-6' />
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => {
										console.log('hello');
									}}
								>
									<p>Signout</p>
								</DropdownMenuItem>
							</DropdownMenu>
						)}
					</div>
				</span>
				<span className='mr-5 relative'>
					<ShoppingBagIcon
						className={`h-6 w-6 sm:hover:text-colorThree text-colorFour transition-all cursor-pointer ${
							openCartDropdown && 'text-colorThree'
						}`}
						ref={cartIconRef}
						onClick={() => setOpenCartDropdown((prev) => !prev)}
					/>
					<span className='h-5 w-5 bg-colorFive absolute -top-2 right-0 left-5 flex items-center justify-center rounded-full'>
						<span className='text-xs text-colorOne rounded-full'>
							{cartItems.length}
						</span>
					</span>

					{openCartDropdown && (
						<div className='hidden sm:block' ref={cartDropdownRef}>
							<DropdownMenu>
								{cartItems.map((item) => (
									<DropdownMenuCartItem item={item} key={item.name} />
								))}
								<TotalPriceCart />
							</DropdownMenu>
						</div>
					)}
				</span>
				<SwitchTransition mode='out-in'>
					<CSSTransition
						key={openNav}
						classNames='fade'
						nodeRef={iconRef}
						addEndListener={(done) =>
							iconRef.current.addEventListener('transitionend', done, false)
						}
					>
						<span
							className='sm:hidden cursor-pointer'
							onClick={() => setOpenNav(!openNav)}
							ref={iconRef}
						>
							{openNav ? (
								<XMarkIcon className='h-6 w-6 hover:text-colorThree text-colorFour transition-all' />
							) : (
								<Bars3Icon className='h-6 w-6 hover:text-colorThree text-colorFour transition-all' />
							)}
						</span>
					</CSSTransition>
				</SwitchTransition>
			</div>
		</header>
	);
};

export default Header;
