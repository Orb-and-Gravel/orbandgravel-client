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
			<section>
				<div className='mt-3'>
					<hr className='border-1 border-colorTwo' />
					<div className='p-4'>
						<span className='text-sm text-gray-500'>
							Product Code: 12122143252
						</span>
						<div className='mt-1 grid grid-cols-4'>
							<img
								src='https://media.istockphoto.com/id/1434115118/de/foto/diamant-auf-goldenem-grund.jpg?s=1024x1024&w=is&k=20&c=awKxNLURdqz1haQdL5rpTcOdZyt04T7Epbon3u89t5M='
								alt=''
								className='w-56 h-36 object-cover rounded-lg'
							/>
							<span className='flex justify-center gap-x-2 mt-1'>
								<span className='text-sm'>color: </span>
								<span className=' w-5 h-5 rounded-full bg-slate-400' />
							</span>
							<span className='text-center mt-1'>
								<span className='text-sm'>qty: </span>
								<span className='font-extrabold'>x2</span>
							</span>
							<span className='text-center text-xl font-extrabold text-colorFour mt-1'>
								$656
							</span>
						</div>
					</div>
				</div>
			</section>
			<section></section>
		</div>
	);
}
