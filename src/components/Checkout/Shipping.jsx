import React from 'react';
import { ErrorBar } from '../Error/ErrorBar';

export default function Shipping({ formik, isLoggedIn }) {
	return (
		<div className='text-colorFive'>
			<h3 className='font-bold mb-7 text-xl'>Shipping</h3>
			{isLoggedIn && (
				<>
					<div className='flex items-center'>
						<p className='w-full text-sm font-bold'>Saved Addresses</p>
						<select
							name='savedAddress'
							id='saved-addresses'
							onChange={formik.handleChange}
							value={formik.values.savedAddress}
							className={`text-colorFive p-2 w-full rounded-md border focus-visible:outline-none cursor-pointer ${
								formik.errors.savedAddress
									? 'border-red-600'
									: 'border-colorOne'
							}`}
						>
							<option value='' className='text-colorFour bg-white'>
								Select an address
							</option>
							<option value='address-1' className='text-colorFour bg-white'>
								Address 1
							</option>
							<option value='address-2' className='text-colorFour bg-white'>
								Address 2
							</option>
						</select>
					</div>
					<ErrorBar message={formik.errors.savedAddress} />
				</>
			)}

			<div>
				<p
					className={`mb-1 text-sm ${isLoggedIn ? 'mt-7' : 'mt-0'}`}
				>
					Shipping Address
				</p>
				<input
					type='text'
					name='shippingAddress'
					autoComplete='street-address'
					onChange={formik.handleChange}
					value={formik.values.shippingAddress}
					className={`w-full rounded-md p-2 outline-none border ${
						formik.errors.shippingAddress ? 'border-red-600' : 'border-colorOne'
					}`}
				/>
				<ErrorBar message={formik.errors.shippingAddress} />
			</div>
			<div className='flex gap-x-5'>
				<div className='w-full'>
					<p className='mb-1 mt-7 text-sm'>Postal Code</p>
					<input
						type='text'
						name='postalCode'
						autoComplete='postal-code'
						onChange={formik.handleChange}
						value={formik.values.postalCode}
						className={`w-full rounded-md p-2 outline-none border ${
							formik.errors.postalCode ? 'border-red-600' : 'border-colorOne'
						}`}
					/>
					<ErrorBar message={formik.errors.postalCode} />
				</div>
				<div className='w-full'>
					<p className='mb-1 mt-7 text-sm'>Payment Method</p>
					<select
						name='paymentMethod'
						id='payment'
						onChange={formik.handleChange}
						value={formik.values.paymentMethod}
						className='text-colorFive p-2 w-full rounded-md border border-colorOne focus-visible:outline-none cursor-pointer'
						disabled
					>
						<option value='cod' className='text-colorFour bg-white'>
							Cash On Delivery
						</option>
					</select>
				</div>
			</div>
		</div>
	);
}
