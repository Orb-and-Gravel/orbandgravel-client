import React from 'react';

export function Radial() {
	return (
		<div className='relative'>
			<img src='/con-01.svg' className='z-10 bg-red-200' />
			<div className='absolute top-[28%] left-[49%] z-20'>
				<p className='opacity-50 cursor-pointer hover:scale-110 hover:opacity-100 transition-all'>
					category 1
				</p>
				<p className='ml-5 mt-5 opacity-50 cursor-pointer hover:scale-110 hover:opacity-100 transition-all'>
					category 2
				</p>
				<p className='ml-7 mt-5 opacity-50 cursor-pointer hover:scale-110 hover:opacity-100 transition-all'>
					category 3
				</p>
				<p className='ml-5 mt-5 opacity-50 cursor-pointer hover:scale-110 hover:opacity-100 transition-all'>
					category 4
				</p>
				<p className='mt-5 opacity-50 cursor-pointer hover:scale-110 hover:opacity-100 transition-all'>
					category 5
				</p>
			</div>
			<div className='bg-blue-400 h-[28rem] w-60 rounded-r-full flex items-center'>
				<div className='bg-zinc-400 w-36 h-10 absolute top-0'></div>
				<div className='bg-white h-[27.5rem] w-[14.7rem] rounded-r-full flex items-center z-10'>
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
