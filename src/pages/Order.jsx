import React from 'react';

export function Order() {
	return (
		<div className='xl:my-14 xl:mx-32 lg:my-10 lg:mx-14 md:my-7 md:mx-10 m-2'>
			<h2 className='text-3xl font-semibold text-colorFive'>
				Order #1231241224
			</h2>
			<span className='mt-1 inline-block'>
				<span>Placed On: </span>
				<span className='font-bold text-colorFour text-lg'>
					12th December 2023
				</span>
			</span>
		</div>
	);
}
