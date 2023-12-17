import React from 'react';

export function Error() {
	return (
		<section>
			<h3
				className='text-[13rem] font-black bg-error-image bg-cover bg-center'
				style={{
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				}}
			>
				Oops!
			</h3>
			<h5>404 - PAGE NOT FOUND</h5>
			<p>The page you are looking for is not available</p>
		</section>
	);
}
