import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconFilled } from '@heroicons/react/24/solid';
import { UserDetails } from '../components/Checkout/UserDetails';
import Shipping from '../components/Checkout/Shipping';
import { ConfirmOrder } from '../components/Checkout/ConfirmOrder';
import { Modal } from '../components/Modal/Modal';
import { OrderSummary } from '../components/Checkout/OrderSummary';

export function Checkout() {
	const [step, setStep] = useState(1);
	const [open, setOpen] = useState(false);

	function calculateStyles(stepAt) {
		if (stepAt == step) {
			return <CheckCircleIcon className='w-5 text-colorThree' />;
		} else if (step > stepAt) {
			return <CheckCircleIconFilled className='w-5 text-colorThree' />;
		} else {
			return <CheckCircleIcon className='w-5' />;
		}
	}

	function handleClickNext() {
		if (step < 3) {
			setStep((prev) => prev + 1);
		} else {
			setOpen(true);
		}
	}

	function handleBackCancel() {
		if (step == 1) {
			return;
		} else if (step > 1) {
			setStep((prev) => prev - 1);
		}
	}

	return (
		<>
			<Modal
				open={open}
				heading='Confirm Purchase?'
				description='Go ahead and confirm the order.'
				onCancel={() => setOpen(false)}
				onConfirm={() => setOpen(false)}
			/>
			<div className='lg:grid lg:grid-cols-5 m-8 lg:gap-x-5 lg:h-[35rem]'>
				<section className='lg:col-span-3 bg-colorHeader rounded-lg border border-colorThree p-6 mb-5 lg:mb-0'>
					<section className='sm:px-14 2xl:max-w-5xl xl:max-w-2xl mx-auto'>
						<section className='flex flex-col sm:flex-row sm:items-center sm:gap-x-4 gap-y-1 sm:gap-y-0 sm:justify-center text-colorFive'>
							<div className='flex gap-x-0.5 whitespace-nowrap'>
								{calculateStyles(1)}
								<p className={`text-sm ${step >= 1 ? 'text-colorThree' : ''}`}>
									User Details
								</p>
							</div>
							<hr className='w-full border-black hidden sm:block' />
							<div className='h-8 border border-black ml-2 border-t-0 border-r-0 border-b-0 block sm:hidden' />
							<div className='flex gap-x-0.5'>
								{calculateStyles(2)}
								<p className={`text-sm ${step >= 2 ? 'text-colorThree' : ''}`}>
									Shipping
								</p>
							</div>
							<hr className='w-full border-black hidden sm:block' />
							<div className='h-8 border border-black ml-2 border-t-0 border-r-0 border-b-0 block sm:hidden' />
							<div className='flex gap-x-0.5 whitespace-nowrap'>
								{calculateStyles(3)}
								<p className={`text-sm ${step >= 3 ? 'text-colorThree' : ''}`}>
									Confirm Order
								</p>
							</div>
						</section>
						<section className='sm:mt-9 mt-5'>
							{step == 1 && <UserDetails />}
							{step == 2 && <Shipping />}
							{step == 3 && <ConfirmOrder />}
							<div className='flex gap-x-3 justify-end mt-7'>
								<button
									className='bg-white border-colorTwo border text-colorFive w-20 text-sm py-2 rounded-md hover:scale-105 transition-all'
									onClick={handleBackCancel}
								>
									{step > 1 ? 'Back' : 'Cancel'}
								</button>
								<button
									className='bg-colorFive text-colorOne w-20 text-sm py-2 rounded-md hover:scale-105 transition-all'
									onClick={handleClickNext}
								>
									{step > 2 ? 'Confirm' : 'Next'}
								</button>
							</div>
						</section>
					</section>
				</section>
				<section className='col-span-2 bg-colorHeader rounded-lg border border-colorThree p-6'>
					<OrderSummary />
				</section>
			</div>
		</>
	);
}
