import { StarIcon } from '@heroicons/react/16/solid';
import React from 'react';

export function Review() {
	return (
		<div className='w-full'>
			<hr className='border border-colorFive' />
			<div className='grid grid-cols-9 sm:my-10 mt-10'>
				<h4 className='hidden sm:block col-span-2 font-bold justify-self-center self-center'>
					Mary Jane
				</h4>
				<div className='sm:col-span-6 col-span-9'>
					<span className='flex'>
						<StarIcon className='w-4' />
						<StarIcon className='w-4' />
						<StarIcon className='w-4' />
						<StarIcon className='w-4' />
						<StarIcon className='w-4' />
					</span>
					<h4 className='text-sm font-bold mt-4'>Heading Review!</h4>
					<p className='truncate'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis
						sem ac orci fermentum condimentum ac vitae turpis. Nulla interdum
						felis et nisi suscipit sagittis. Aliquam erat volutpat. Pellentesque
						cursus semper lectus. Fusce commodo velit vel lorem pellentesque, in
						tempus diam viverra. Proin non molestie quam. Suspendisse at erat
						mauris. Proin in bibendum risus. Nunc id cursus orci. In ut augue
						blandit, placerat odio in, convallis est. In scelerisque, ligula ac
						sodales egestas, ante tortor varius orci, sit amet aliquam lectus
						lectus auctor lacus. Suspendisse non nibh ut dui rhoncus placerat
						sit amet sed mi. Maecenas id massa condimentum, ullamcorper nisi
						sed, congue urna. Ut eget condimentum massa, at interdum odio.
					</p>
				</div>
				<p className='justify-self-end sm:block hidden'>02/08/24</p>
			</div>
			<div className='mb-10 mt-4 flex justify-between pr-1 text-colorFive sm:hidden'>
				<h4 className='text-sm font-bold'>Mary Jane</h4>
				<p>02/08/24</p>
			</div>
		</div>
	);
}
