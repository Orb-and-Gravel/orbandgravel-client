import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Searchbar = () => {
	return (
		<div className='bg-white flex p-3 rounded-3xl'>
			<input
				type='text'
				className='focus:outline-none xl:w-80 lg:w-72 sm:w-28'
				placeholder='Search'
			/>
			<MagnifyingGlassIcon className='h-6 w-6 hover:text-colorThree text-colorFour transition-all' />
		</div>
	);
};

export default Searchbar;
