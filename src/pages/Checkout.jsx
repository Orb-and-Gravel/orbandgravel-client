import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { UserDetails } from '../components/Checkout/UserDetails';

export function Checkout() {
	return (
		<div className='grid grid-cols-5 m-8 gap-x-5'>
			<section className='col-span-3 bg-colorHeader rounded-lg border border-colorThree p-6'>
				<section className='px-14 max-w-2xl mx-auto'>
					<section className='flex items-center gap-x-4 justify-center text-colorFive'>
						<div className='flex gap-x-0.5 whitespace-nowrap'>
							<CheckCircleIcon className='w-5' />
							<p className='text-sm'>User Details</p>
						</div>
						<hr className='w-full border-0.5 border-black' />
						<div className='flex gap-x-0.5'>
							<CheckCircleIcon className='w-5' />
							<p className='text-sm'>Shipping</p>
						</div>
						<hr className='w-full border-0.5 border-black' />
						<div className='flex gap-x-0.5 whitespace-nowrap'>
							<CheckCircleIcon className='w-5' />
							<p className='text-sm'>Confirm Order</p>
						</div>
					</section>
					<section className='mt-9'>
						<UserDetails />
						<div className='flex gap-x-3 justify-end mt-7'>
							<button className='bg-white border-colorTwo border text-colorFive w-20 text-sm py-2 rounded-md'>
								Cancel
							</button>
							<button className='bg-colorFive text-colorOne w-20 text-sm py-2 rounded-md'>
								Next
							</button>
						</div>
					</section>
				</section>
			</section>
			<section className='col-span-2 bg-colorHeader rounded-lg border border-colorThree p-6'>
				order summary
			</section>
		</div>
	);
}
