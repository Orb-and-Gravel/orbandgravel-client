import React, { useRef, useState } from 'react';
import IconSquarePinterest from '../../assets/PinterestLogo';
import IconSquareInstagram from '../../assets/InstagramLogo';
import IconLinkedin from '../../assets/LinkedinLogo';
import IconFacebookSquared from '../../assets/FacebookLogo';

export default function Footer() {
	const [infoDrop, setInfoDrop] = useState(false);
	const [helpDrop, setHelpDrop] = useState(false);
	const [careDrop, setCareDrop] = useState(false);

	return (
		<footer className='bg-colorHeader text-colorFive sm:px-14 pt-14 mt-8'>
			<div className='lg:grid lg:grid-cols-2 lg:gap-x-16 pb-14'>
				<div className='sm:grid sm:grid-cols-3 sm:justify-items-center'>
					<div className='text-sm'>
						<h6
							className='font-bold sm:mb-2 border border-l-0 border-r-0 border-colorTwo bg-gray-50 sm:bg-transparent sm:border-0 p-2 sm:p-0 shadow sm:shadow-none'
							onClick={() => setInfoDrop((prev) => !prev)}
						>
							COMPANY INFO
						</h6>
						<div
							className={`sm:block space-y-0.5 overflow-hidden h-0 sm:h-fit transition-[height] duration-300 ${
								infoDrop ? 'h-[43px]' : ''
							}`}
						>
							<p className='cursor-pointer hover:text-colorFour w-fit px-2 sm:px-0'>
								Terms & Conditions
							</p>
							<p className='cursor-pointer hover:text-colorFour w-fit px-2 sm:px-0'>
								Privacy Policy
							</p>
						</div>
					</div>
					<div className='text-sm'>
						<h6
							className={`font-bold sm:mb-2 border-colorOne bg-gray-50 sm:bg-transparent shadow sm:shadow-none sm:border-0 p-2 sm:p-0 ${
								helpDrop &&
								!infoDrop &&
								'border border-l-0 border-r-0 border-t-0'
							} ${
								infoDrop &&
								!helpDrop &&
								'border border-l-0 border-r-0 border-b-0'
							} ${infoDrop && helpDrop && 'border border-l-0 border-r-0'}
                     `}
							onClick={() => setHelpDrop((prev) => !prev)}
						>
							HELP & SUPPORT
						</h6>
						<div
							className={`sm:block space-y-0.5 overflow-hidden h-0 sm:h-fit transition-[height] duration-300 ${
								helpDrop ? 'h-[87px]' : ''
							}`}
						>
							<p className='cursor-pointer hover:text-colorFour w-fit px-2 sm:px-0'>
								Refund
							</p>
							<p className='cursor-pointer hover:text-colorFour w-fit px-2 sm:px-0'>
								How to Order
							</p>
							<p className='cursor-pointer hover:text-colorFour w-fit px-2 sm:px-0'>
								How to Track
							</p>
							<p className='cursor-pointer hover:text-colorFour w-fit px-2 sm:px-0'>
								Size Guide
							</p>
						</div>
					</div>
					<div className='text-sm'>
						<h6
							className='font-bold sm:mb-2 border border-l-0 border-r-0 border-colorTwo bg-gray-50 sm:bg-transparent sm:border-0 p-2 sm:p-0 shadow sm:shadow-none'
							onClick={() => setCareDrop((prev) => !prev)}
						>
							CUSTOMER CARE
						</h6>
						<div
							className={`sm:block space-y-0.5 overflow-hidden h-0 sm:h-fit transition-[height] duration-300 ${
								careDrop ? 'h-[21px]' : ''
							}`}
						>
							<p className='cursor-pointer hover:text-colorFour w-fit px-2 sm:px-0'>
								Contact Us
							</p>
						</div>
					</div>
				</div>
				<div>
					<h6 className='font-bold lg:mb-2 mt-4 lg:mt-0 text-sm text-center lg:text-left'>
						FIND US ON
					</h6>
					<div className='flex lg:gap-x-5 justify-between lg:justify-start max-w-[300px] mx-auto lg:mx-0'>
						<IconSquarePinterest />
						<IconFacebookSquared />
						<IconSquareInstagram />
						<IconLinkedin />
					</div>
					<div className='lg:mt-8 mt-6 px-2 sm:px-0'>
						<label
							htmlFor='subscribe'
							className='text-sm font-bold text-colorFive block w-full text-center lg:text-left'
						>
							SUBSCRIBE FOR LATEST O&G NEWS
						</label>
						<div className='flex bg-colorFive border border-colorOne'>
							<input
								type='email'
								id='subscribe'
								className='w-full focus-visible:outline-0 px-3 py-1.5'
								placeholder='Your email'
							/>
							<button className='text-colorOne w-1/3 font-bold min-w-[100px]'>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:flex lg:justify-between text-xs text-center lg:text-left tracking-wide'>
				<p>©2024 Orb & Gravel All Rights Reserved</p>
				<p>Software by QuantiPhi Systems</p>
			</div>
		</footer>
	);
}
