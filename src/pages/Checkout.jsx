import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export function Checkout() {
	return (
		<div className='grid grid-cols-5 m-8 gap-x-5'>
			<section className='col-span-3 bg-colorHeader rounded-lg border border-colorThree p-6'>
				<section className='px-14'>
					<section className='flex items-center gap-x-4 justify-center'>
						<div className='flex gap-x-0.5'>
							<CheckCircleIcon className='w-5' />
							<p className='text-sm'>User Details</p>
						</div>
						<hr className='w-16 border-0.5 border-black' />
						<div className='flex gap-x-0.5'>
							<CheckCircleIcon className='w-5' />
							<p className='text-sm'>User Details</p>
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
