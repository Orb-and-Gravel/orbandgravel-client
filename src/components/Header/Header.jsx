import Searchbar from './Searchbar';
import logo from '../../assets/ong-logo.png';
import {
	UserIcon,
	ShoppingBagIcon,
	XMarkIcon,
	Bars3Icon,
} from '@heroicons/react/24/outline';

const Header = ({ setOpen, open }) => {
	return (
		<div className='bg-colorHeader min-w-full h-28 flex items-center justify-between'>
			<div className=' flex-[1_0_0%] sm:flex justify-center hidden'>
				<Searchbar />
			</div>
			<div className='flex-[1_0_0%] flex sm:justify-center ml-4 object-contain'>
				<img
					src={logo}
					alt='Orb & Gravel'
					width={250}
					height={250}
					className='cursor-pointer'
				/>
			</div>
			<div className='flex flex-[1_0_0%] justify-center'>
				<span className='mr-5 cursor-pointer'>
					<UserIcon className='h-6 w-6 hover:text-colorOne text-colorThree transition-all' />
				</span>
				<span className='mr-5 cursor-pointer'>
					<ShoppingBagIcon className='h-6 w-6 hover:text-colorOne text-colorThree transition-all' />
				</span>
				<span
					className='sm:hidden cursor-pointer'
					onClick={() => setOpen(!open)}
				>
					{open ? (
						<XMarkIcon className='h-6 w-6 hover:text-colorOne text-colorThree transition-all' />
					) : (
						<Bars3Icon className='h-6 w-6 hover:text-colorOne text-colorThree transition-all' />
					)}
				</span>
			</div>
		</div>
	);
};

export default Header;
