import { StarIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { Loader } from '../Loader/Loader';
import { ErrorDialog } from '../Error/ErrorDialog';

export function RatingsFilter({
	analytics,
	overview,
	isLoading,
	isError,
	error,
	setFilter,
	filter,
}) {
	if (isLoading) {
		return <Loader />;
	} else if (isError) {
		return <ErrorDialog errorText={error.response.data.message} />;
	}
	return (
		<React.Fragment>
			<div
				className={`flex px-2 ${
					analytics.data.message[5]
						? `hover:bg-colorTwo ${filter === 5 && 'bg-colorTwo'}`
						: 'opacity-50'
				}`}
				aria-disabled={!analytics.data.message[5]}
				onClick={() => setFilter(5)}
			>
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<progress
					value={analytics.data.message[5]}
					max={overview.total}
					className='ml-2 mt-2'
				/>
			</div>
			<div
				className={`flex mt-1 px-2 ${
					analytics.data.message[4]
						? `hover:bg-colorTwo ${filter === 4 && 'bg-colorTwo'}`
						: 'opacity-50'
				}`}
				aria-disabled={!analytics.data.message[4]}
				onClick={() => setFilter(4)}
			>
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5 text-white' />
				<progress
					value={analytics.data.message[4]}
					max={overview.total}
					className='ml-2 mt-2'
				/>
			</div>
			<div
				className={`flex mt-1 px-2 ${
					analytics.data.message[3]
						? `hover:bg-colorTwo ${filter === 3 && 'bg-colorTwo'}`
						: 'opacity-50'
				}`}
				aria-disabled={!analytics.data.message[3]}
				onClick={() => setFilter(3)}
			>
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<progress
					value={analytics.data.message[3]}
					max={overview.total}
					className='ml-2 mt-2'
				/>
			</div>
			<div
				className={`flex mt-1 px-2 ${
					analytics.data.message[2]
						? `hover:bg-colorTwo ${filter === 2 && 'bg-colorTwo'}`
						: 'opacity-50'
				}`}
				aria-disabled={!analytics.data.message[2]}
				onClick={() => setFilter(2)}
			>
				<StarIcon className='w-5' />
				<StarIcon className='w-5' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<progress
					value={analytics.data.message[2]}
					max={overview.total}
					className='ml-2 mt-2'
				/>
			</div>
			<div
				className={`flex mt-1 px-2 ${
					analytics.data.message[1]
						? `hover:bg-colorTwo ${filter === 1 && 'bg-colorTwo'}`
						: 'opacity-50'
				}`}
				aria-disabled={!analytics.data.message[1]}
				onClick={() => setFilter(1)}
			>
				<StarIcon className='w-5' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<StarIcon className='w-5 text-white' />
				<progress
					value={analytics.data.message[1]}
					max={overview.total}
					className='ml-2 mt-2'
				/>
			</div>
		</React.Fragment>
	);
}
