import React, { useState } from 'react';

export function Radial({ catIndex, setCatIndex }) {
	const handleCatClick = (i) => {
		setCatIndex(i);
	};

	return (
		<div className='relative'>
			<div className='absolute top-[28%] xl:left-[49%] left-[47%] z-20'>
				<p
					className={`${
						catIndex === 0
							? 'scale-110 font-bold'
							: 'opacity-50 hover:scale-110 hover:opacity-100 transition-all '
					} cursor-pointer text-colorFive xl:text-base text-sm`}
					onClick={() => handleCatClick(0)}
				>
					category 1
				</p>
				<p
					className={`${
						catIndex === 1
							? 'scale-110 font-bold'
							: 'opacity-50 hover:scale-110 hover:opacity-100 transition-all '
					} cursor-pointer ml-5 mt-5 text-colorFive xl:text-base text-sm`}
					onClick={() => handleCatClick(1)}
				>
					category 2
				</p>
				<p
					className={`${
						catIndex === 2
							? 'scale-110 font-bold'
							: 'opacity-50 hover:scale-110 hover:opacity-100 transition-all '
					} cursor-pointer ml-7 mt-5 text-colorFive xl:text-base text-sm`}
					onClick={() => handleCatClick(2)}
				>
					category 3
				</p>
				<p
					className={`${
						catIndex === 3
							? 'scale-110 font-bold'
							: 'opacity-50 hover:scale-110 hover:opacity-100 transition-all '
					} cursor-pointer ml-5 mt-5 text-colorFive xl:text-base text-sm`}
					onClick={() => handleCatClick(3)}
				>
					category 4
				</p>
				<p
					className={`${
						catIndex === 4
							? 'scale-110 font-bold'
							: 'opacity-50 hover:scale-110 hover:opacity-100 transition-all '
					} cursor-pointer mt-5 text-colorFive xl:text-base text-sm`}
					onClick={() => handleCatClick(4)}
				>
					category 5
				</p>
			</div>
			<div className='bg-colorTwo xl:h-[28rem] xl:w-60 h-[25.5rem] w-[13.3rem] rounded-r-full flex items-center overflow-hidden relative'>
				<div
					className='bg-colorFive absolute top-1/2 w-full h-1/3 transition-all'
					style={{
						transform: `rotate(${-60 + catIndex * 23}deg) skew(60deg)`,
						transformOrigin: '0 0',
					}}
				></div>
				<div className='bg-white xl:h-[27.5rem] xl:w-[14.7rem] h-[25rem] w-[13rem] rounded-r-full flex items-center z-10'>
					<div className='bg-colorOne xl:h-64 xl:w-32 h-56 w-28 rounded-r-full flex items-center'>
						<div className='bg-white xl:h-56 xl:w-28 h-48 w-24 rounded-r-full flex items-center'>
							<div className='bg-colorFour xl:h-40 xl:w-20 h-32 w-16 rounded-r-full'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
