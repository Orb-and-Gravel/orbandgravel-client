import Searchbar from './Searchbar';
import logo from '../../assets/ong-logo.png';
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

const Header = ({ setOpen, open }) => {
	const iconRef = useRef(null);
	const [openProfileDropdown, setOpenProfileDropdown] = useState(false);

	const onClickDropdownItem = () => {};

	return (
		<div className='bg-colorHeader min-w-full h-24 sm:h-28 flex items-center justify-between'>
			<div className='flex-[1_0_0%] sm:flex justify-center hidden'>
				<Searchbar />
			</div>
			<div className='flex-[1_0_0%] flex sm:justify-center object-contain'>
				<img
					src={logo}
					alt='Orb & Gravel'
					width={250}
					height={250}
					className='cursor-pointer'
				/>
			</div>
			<div className='flex flex-[1_0_0%] justify-center'>
				<span className='mr-5'>
					<div className='relative'>
						<UserIcon
							className='h-6 w-6 hover:text-colorThree text-colorFour transition-all cursor-pointer'
							onClick={() => setOpenProfileDropdown((prev) => !prev)}
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
				<span className='mr-5 cursor-pointer'>
					<ShoppingBagIcon className='h-6 w-6 hover:text-colorThree text-colorFour transition-all' />
				</span>
				<SwitchTransition>
					<CSSTransition
						key={open}
						classNames='fade'
						nodeRef={iconRef}
						addEndListener={(done) =>
							iconRef.current.addEventListener('transitionend', done, false)
						}
					>
						<span
							className='sm:hidden cursor-pointer'
							onClick={() => setOpen(!open)}
							ref={iconRef}
						>
							{open ? (
								<XMarkIcon className='h-6 w-6 hover:text-colorThree text-colorFour transition-all' />
							) : (
								<Bars3Icon className='h-6 w-6 hover:text-colorThree text-colorFour transition-all' />
							)}
						</span>
					</CSSTransition>
				</SwitchTransition>
			</div>
		</div>
	);
};

export default Header;
