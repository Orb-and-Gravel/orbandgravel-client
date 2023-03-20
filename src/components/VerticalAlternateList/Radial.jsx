import React from 'react';

export function Radial() {
	return (
		<div className='relative'>
			<div className='absolute top-[37%] left-[55%]'>
				<p>category 1</p>
				<p className='ml-1'>category 2</p>
				<p className='ml-2'>category 3</p>
				<p className='ml-1'>category 4</p>
				<p>category 5</p>
			</div>
			<div className='bg-blue-400 h-[28rem] w-60 rounded-r-full flex items-center'>
				<div className='bg-white h-[27.5rem] w-[14.7rem] rounded-r-full flex items-center'>
					<div className='bg-green-400 h-64 w-32 rounded-r-full flex items-center'>
						<div className='bg-white h-56 w-28 rounded-r-full flex items-center'>
							<div className='bg-red-400 h-40 w-20 rounded-r-full'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
