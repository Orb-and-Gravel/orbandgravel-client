import { useGetAllCategory } from '../../query/hooks/useCategory';
const Navbar = () => {
	const { data } = useGetAllCategory();
	return (
		<nav className='absolute sm:static sm:bg-white/100 w-full bg-white/90'>
			<hr className='border-colorTwo' />
			<ul className='flex justify-between sm:items-center my-4 xl:mx-64 lg:mx-32 md:mx-16 sm:mx-4 sm:flex-row flex-col ml-6'>
				{data?.data?.message.map((category) => (
					<li
						className='text-sm tracking-widest cursor-pointer text-colorFour hover:text-colorThree sm:mb-0 mb-3 transition-all uppercase'
						key={category._id}
					>
						<a href={`/category/${category.slug}`}>{category.name}</a>
					</li>
				))}
			</ul>
			<hr className='border-colorTwo' />
		</nav>
	);
};

export default Navbar;
