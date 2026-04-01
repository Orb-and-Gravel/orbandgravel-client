import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconFilled } from '@heroicons/react/24/solid';
import { UserDetails } from '../components/Checkout/UserDetails';
import Shipping from '../components/Checkout/Shipping';
import { ConfirmOrder } from '../components/Checkout/ConfirmOrder';
import { Modal } from '../components/Modal/Modal';
import { OrderSummary } from '../components/Checkout/OrderSummary';
import { useGetCart } from '../query/hooks/useCart';

const checkoutStep1Schema = Yup.object({
	fullName: Yup.string().trim().required('Full name is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	phone: Yup.string()
		.trim()
		.required('Phone number is required')
		.matches(
			/^(?=.*[0-9])[+0-9]+$/,
			'Phone may only contain digits and +, with at least one digit'
		),
});

function getCheckoutStep2Schema(isLoggedIn) {
	return Yup.object({
		savedAddress: isLoggedIn
			? Yup.string().required('Please select a saved address')
			: Yup.string(),
		shippingAddress: Yup.string()
			.trim()
			.required('Shipping address is required'),
		postalCode: Yup.string()
			.trim()
			.required('Postal code is required')
			.matches(/^[A-Z0-9][A-Z0-9\s\-]{0,9}$/i, 'Enter a valid postal code'),
		paymentMethod: Yup.string(),
	});
}

function yupErrorsToFormik(err) {
	const errors = {};
	if (err.inner?.length) {
		err.inner.forEach((e) => {
			if (e.path) errors[e.path] = e.message;
		});
	} else if (err.path) {
		errors[err.path] = err.message;
	}
	return errors;
}

export function Checkout() {
	const navigate = useNavigate();
	const { guestHash, userRecord } = useSelector((state) => state.user);
	const isLoggedIn = Boolean(userRecord?._id);
	const { data: cartData, isSuccess: cartLoaded } = useGetCart(guestHash);
	const [step, setStep] = useState(1);
	const [open, setOpen] = useState(false);

	const formik = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			phone: '',
			savedAddress: '',
			shippingAddress: '',
			postalCode: '',
			paymentMethod: 'cod',
		},
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: () => {
			setOpen(true);
		},
	});

	useEffect(() => {
		if (!guestHash || !cartLoaded) return;
		const items = cartData?.data?.message?.items;
		if (!items?.length) {
			navigate('/', { replace: true });
		}
	}, [guestHash, cartLoaded, cartData, navigate]);

	function calculateStyles(stepAt) {
		if (stepAt == step) {
			return <CheckCircleIcon className='w-5 text-colorThree' />;
		} else if (step > stepAt) {
			return <CheckCircleIconFilled className='w-5 text-colorThree' />;
		} else {
			return <CheckCircleIcon className='w-5' />;
		}
	}

	async function handleClickNext() {
		formik.setErrors({});
		if (step === 1) {
			try {
				await checkoutStep1Schema.validate(formik.values, {
					abortEarly: false,
				});
				setStep(2);
			} catch (e) {
				if (e.name === 'ValidationError') {
					formik.setErrors(yupErrorsToFormik(e));
				}
			}
			return;
		}
		if (step === 2) {
			try {
				await getCheckoutStep2Schema(isLoggedIn).validate(formik.values, {
					abortEarly: false,
				});
				setStep(3);
			} catch (e) {
				if (e.name === 'ValidationError') {
					formik.setErrors(yupErrorsToFormik(e));
				}
			}
			return;
		}
		formik.handleSubmit();
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
							<form
								onSubmit={(e) => {
									e.preventDefault();
									if (step === 3) {
										formik.handleSubmit();
									}
								}}
							>
								{step == 1 && <UserDetails formik={formik} />}
								{step == 2 && (
									<Shipping formik={formik} isLoggedIn={isLoggedIn} />
								)}
								{step == 3 && <ConfirmOrder formik={formik} />}
								<div className='flex gap-x-3 justify-end mt-7'>
									<button
										type='button'
										className='bg-white border-colorTwo border text-colorFive w-20 text-sm py-2 rounded-md hover:scale-105 transition-all'
										onClick={handleBackCancel}
									>
										{step > 1 ? 'Back' : 'Cancel'}
									</button>
									<button
										type={step === 3 ? 'submit' : 'button'}
										className='bg-colorFive text-colorOne w-20 text-sm py-2 rounded-md hover:scale-105 transition-all'
										onClick={step === 3 ? undefined : handleClickNext}
									>
										{step > 2 ? 'Confirm' : 'Next'}
									</button>
								</div>
							</form>
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
