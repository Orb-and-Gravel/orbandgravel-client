import React, { useState } from 'react';

export function Radial() {
	const [catIndex, setCatIndex] = useState(0);

	const handleCatClick = (i) => {
		setCatIndex(i);
	};

	return (
		<div className='relative'>
			<div className='absolute top-[28%] left-[49%] z-20'>
				<p
					className={`${
						catIndex === 0
							? 'scale-110 font-bold'
							: 'opacity-50 hover:scale-110 hover:opacity-100 transition-all '
					} cursor-pointer`}
					onClick={() => handleCatClick(0)}
				>
					category 1
				</p>
				<p
					className={`${
						catIndex === 1
							? 'scale-110 font-bold'
							: 'opacity-50 hover:scale-110 hover:opacity-100 transition-all '
					} cursor-pointer ml-5 mt-5`}
					onClick={() => handleCatClick(1)}
				>
					category 2
				</p>
				<p
					className={`${
						catIndex === 2
							? 'scale-110 font-bold'
							: 'opacity-50 hover:scale-110 hover:opacity-100 transition-all '
					} cursor-pointer ml-7 mt-5`}
					onClick={() => handleCatClick(2)}
				>
					category 3
				</p>
				<p
					className={`${
						catIndex === 3
							? 'scale-110 font-bold'
							: 'opacity-50 hover:scale-110 hover:opacity-100 transition-all '
					} cursor-pointer ml-5 mt-5`}
					onClick={() => handleCatClick(3)}
				>
					category 4
				</p>
				<p
					className={`${
						catIndex === 4
							? 'scale-110 font-bold'
							: 'opacity-50 hover:scale-110 hover:opacity-100 transition-all '
					} cursor-pointer mt-5`}
					onClick={() => handleCatClick(4)}
				>
					category 5
				</p>
			</div>
			<div className='bg-blue-400 h-[28rem] w-60 rounded-r-full flex items-center overflow-hidden relative'>
				<div
					className='bg-blue-900 absolute top-1/2 w-full h-1/3 transition-all'
					style={{
						transform: `rotate(${-60 + catIndex * 23}deg) skew(60deg)`,
						transformOrigin: '0 0',
					}}
				></div>
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
