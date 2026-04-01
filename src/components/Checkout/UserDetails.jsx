import React from 'react';
import { ErrorBar } from '../Error/ErrorBar';

function sanitizePhone(value) {
	return value.replace(/[^0-9+]/g, '');
}

export function UserDetails({ formik }) {
	return (
		<div className='text-colorFive'>
			<h3 className='font-bold mb-5 text-xl'>User Details</h3>
			<p className='mb-1 text-sm'>Full Name</p>
			<input
				type='text'
				name='fullName'
				autoComplete='name'
				onChange={formik.handleChange}
				value={formik.values.fullName}
				className={`w-full rounded-md p-2 outline-none border ${
					formik.errors.fullName ? 'border-red-600' : 'border-colorOne'
				}`}
			/>
			<ErrorBar message={formik.errors.fullName} />

			<p className='mb-1 mt-7 text-sm'>Email</p>
			<input
				type='email'
				name='email'
				autoComplete='email'
				onChange={formik.handleChange}
				value={formik.values.email}
				className={`w-full rounded-md p-2 outline-none border ${
					formik.errors.email ? 'border-red-600' : 'border-colorOne'
				}`}
			/>
			<ErrorBar message={formik.errors.email} />

			<p className='mb-1 mt-7 text-sm'>Phone Number</p>
			<input
				type='tel'
				name='phone'
				inputMode='tel'
				autoComplete='tel'
				onChange={(e) => {
					formik.setFieldValue('phone', sanitizePhone(e.target.value));
				}}
				value={formik.values.phone}
				className={`w-full rounded-md p-2 outline-none border ${
					formik.errors.phone ? 'border-red-600' : 'border-colorOne'
				}`}
			/>
			<ErrorBar message={formik.errors.phone} />
		</div>
	);
}
