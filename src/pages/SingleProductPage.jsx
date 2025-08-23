import { useEffect, useState, useCallback, useMemo } from 'react';
import { ProductPageImageSlider } from '../components/Products/ProductPageImageSlider';
import {
	StarIcon,
	HeartIcon as HeartIconSolid,
} from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import { ProductPageAccordion } from '../components/Products/ProductPageAccordion';
import { ProductItem } from '../components/Products/ProductItem';
import { RatingsFilter } from '../components/Products/RatingsFilter';
import { Review } from '../components/Review/Review';
import { useParams } from 'react-router-dom';
import { useGetSingleProduct } from '../query/hooks/useProduct';
import { Loader } from '../components/Loader/Loader';
import {
	useGetReviews,
	useGetReviewsAnalytics,
	useGetReviewsPagination,
} from '../query/hooks/useReview';
import { ErrorDialog } from '../components/Error/ErrorDialog';
import {
	useCheckWishlistItem,
	useToggleWishlistItem,
} from '../query/hooks/useWishlist';
import { useSelector } from 'react-redux';
import { useAddToCart } from '../query/hooks/useCart';

function useProductPageData(slug, userId) {
	const [page, setPage] = useState(1);
	const [filter, setFilter] = useState(0);
	const {
		data: productData,
		isLoading,
		isError,
		error,
	} = useGetSingleProduct(slug);
	const productId = productData?.data.message._id;

	const {
		data: reviews,
		refetch: refetchReviews,
		isLoading: isReviewLoading,
	} = useGetReviews(productId, page, filter);

	const {
		data: reviewsAnalytics,
		refetch: refetchAnalytics,
		isLoading: isAnalyticsLoading,
		isError: isAnalyticsError,
		error: analyticsError,
	} = useGetReviewsAnalytics(productId);

	const { data: paginationData, refetch: refetchPagination } =
		useGetReviewsPagination(productId, filter);

	const { data: checkWishlistData, refetch: refetchWishlist } =
		useCheckWishlistItem(productId, userId);

	useEffect(() => {
		if (productData) {
			refetchReviews();
			refetchAnalytics();
			refetchPagination();
			if (userId) {
				refetchWishlist();
			}
		}
	}, [
		productData,
		userId,
		refetchReviews,
		refetchAnalytics,
		refetchPagination,
		refetchWishlist,
	]);

	const pageLimit = useMemo(
		() => Math.ceil((paginationData?.data.message || 0) / 3),
		[paginationData]
	);

	return {
		productData,
		isLoading,
		isError,
		error,
		reviews,
		isReviewLoading,
		reviewsAnalytics,
		isAnalyticsLoading,
		isAnalyticsError,
		analyticsError,
		paginationData,
		pageLimit,
		page,
		setPage,
		filter,
		setFilter,
		checkWishlistData,
	};
}

function ProductVariation({ variation, color, onChangeColor }) {
	if (!variation) return null;
	return (
		<div className='mt-12'>
			<p>color</p>
			<div className='flex gap-x-4 mt-3 justify-center sm:justify-start'>
				{variation.productSet.itemSet.map((item, i) => (
					<button
						key={i}
						className={`h-8 w-8 rounded-full outline ${
							color === item.color ? 'outline-3' : 'outline-1'
						} outline-offset-2 outline-colorFour`}
						onClick={() => onChangeColor(item)}
						style={{ backgroundColor: item.color }}
					/>
				))}
			</div>
		</div>
	);
}

function ProductActions({
	onAddToCart,
	addToCartPending,
	checkWishlistData,
	onToggleWishlist,
	wishlistPending,
	userId,
}) {
	return (
		<div className='mt-16'>
			<div className='flex gap-x-1'>
				<button
					className='text-colorOne bg-colorFive p-4 flex-1 font-semibold tracking-wider hover:bg-colorFour transition-all'
					onClick={onAddToCart}
					disabled={addToCartPending}
				>
					ADD TO CART
				</button>
				<button
					className={`py-4 px-6 transition-all ${
						checkWishlistData?.data.message
							? 'text-colorFive bg-colorOne'
							: 'text-colorOne bg-colorFive hover:bg-colorFour'
					} disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:bg-colorFive`}
					disabled={wishlistPending || !userId}
					onClick={onToggleWishlist}
				>
					{checkWishlistData?.data.message ? (
						<HeartIconSolid className='w-6' />
					) : (
						<HeartIcon className='w-6' />
					)}
				</button>
			</div>
		</div>
	);
}

function ReviewsSection({
	reviews,
	isReviewLoading,
	reviewsAnalytics,
	isAnalyticsLoading,
	isAnalyticsError,
	analyticsError,
	filter,
	setFilter,
	page,
	pageLimit,
	paginationData,
	onChangePage,
}) {
	return (
		<section className='mt-10'>
			{isReviewLoading ? (
				<div className='flex justify-center min-h-[30rem]'>
					<Loader />
				</div>
			) : (
				<>
					{reviews?.data.message.map((review) => (
						<Review review={review} key={review._id} />
					))}
				</>
			)}
			<div className='flex flex-col items-center'>
				<span className='text-sm text-colorFour'>
					Showing{' '}
					<span className='font-semibold text-colorFive'>
						{page === 1 ? 1 : (page - 1) * 3 + 1}
					</span>{' '}
					to{' '}
					<span className='font-semibold text-colorFive'>
						{page === pageLimit ? paginationData?.data.message : page * 3}
					</span>{' '}
					of{' '}
					<span className='font-semibold text-colorFive'>
						{paginationData?.data.message}
					</span>{' '}
					Entries
				</span>
				<div className='inline-flex mt-2 xs:mt-0 text-colorFive border border-colorFour rounded-md divide-x divide-colorFour'>
					<button
						className={`flex items-center justify-center px-3 h-8 text-sm font-medium rounded-l-md ${
							page <= 1 ? 'opacity-50' : 'hover:bg-colorOne'
						}`}
						onClick={() => onChangePage('prev')}
						disabled={page <= 1}
					>
						Prev
					</button>
					<button
						className={`flex items-center justify-center px-3 h-8 text-sm font-medium rounded-r-md ${
							page >= pageLimit ? 'opacity-50' : 'hover:bg-colorOne'
						}`}
						onClick={() => onChangePage('next')}
						disabled={page >= pageLimit}
					>
						Next
					</button>
				</div>
			</div>
		</section>
	);
}

export function SingleProductPage() {
	const { slug } = useParams();
	const { userRecord, guestHash } = useSelector((state) => state.user);
	const {
		productData,
		isLoading,
		isError,
		error,
		reviews,
		isReviewLoading,
		reviewsAnalytics,
		isAnalyticsLoading,
		isAnalyticsError,
		analyticsError,
		paginationData,
		pageLimit,
		page,
		setPage,
		filter,
		setFilter,
		checkWishlistData,
	} = useProductPageData(slug, userRecord._id);

	const { mutate: addToCartMutation, isPending: addToCartPending } =
		useAddToCart();
	const { mutate: toggleWishlistMutation, isPending: wishlistPending } =
		useToggleWishlistItem();

	const [color, setColor] = useState(null);
	const [colorImages, setColorImages] = useState([]);

	useEffect(() => {
		if (productData) {
			const firstItem = productData?.data.message.productSet.itemSet[0];
			setColor(firstItem?.color || null);
			setColorImages(firstItem?.images || []);
		}
	}, [productData]);

	const handleChangeColor = useCallback((item) => {
		setColor(item.color);
		setColorImages(item.images);
	}, []);

	const handleChangePage = useCallback(
		(opr) => {
			setPage((prev) => (opr === 'next' ? prev + 1 : prev - 1));
		},
		[setPage]
	);

	const handleAddToCart = useCallback(() => {
		if (productData?.data.message._id) {
			addToCartMutation({
				userHash: guestHash,
				productId: productData.data.message._id,
			});
		}
	}, [addToCartMutation, guestHash, productData]);

	const handleToggleWishlist = useCallback(() => {
		if (productData?.data.message._id) {
			toggleWishlistMutation({ productId: productData.data.message._id });
		}
	}, [toggleWishlistMutation, productData]);

	if (isLoading) {
		return (
			<div className='flex justify-center'>
				<Loader />
			</div>
		);
	}
	if (isError) {
		return (
			<ErrorDialog
				errorText={error.response?.data?.message || 'Error loading product.'}
			/>
		);
	}

	const product = productData?.data.message;

	return (
		<div>
			<div className='md:grid block grid-cols-7'>
				<section className='col-span-4'>
					<ProductPageImageSlider slides={colorImages} />
				</section>
				<section className='col-span-3 lg:p-14 p-8 md:text-left text-center'>
					<h4 className='lg:text-2xl text-xl font-bold text-colorFive'>
						{product.name}
					</h4>
					<h6 className='font-semibold lg:text-xl text-lg text-colorThree mt-2'>
						PKR {product.price}
					</h6>
					{product.reviewsOverview.total > 0 && (
						<div className='flex lg:gap-x-2 gap-x-1 mt-5 items-center md:justify-start justify-center'>
							{[...Array(5)].map((_, i) => (
								<StarIcon className='w-4' key={i} />
							))}
							<p className='text-sm mx-1 leading-[0px]'>
								{product.reviewsOverview.rating}
							</p>
							<p>|</p>
							<a className='text-sm underline ml-1' href='#reviews'>
								See reviews
							</a>
						</div>
					)}
					<hr className='mt-10 border border-colorFour' />
					<ProductVariation
						variation={product.variation ? product : null}
						color={color}
						onChangeColor={handleChangeColor}
					/>
					<ProductActions
						onAddToCart={handleAddToCart}
						addToCartPending={addToCartPending}
						checkWishlistData={checkWishlistData}
						onToggleWishlist={handleToggleWishlist}
						wishlistPending={wishlistPending}
						userId={userRecord._id}
					/>
					<section className='mt-20'>
						<hr className='border border-colorFour' />
						<ProductPageAccordion
							accordionDetails={product.details}
							accordionName='Details'
						/>
						<hr className='border border-colorFour mt-6' />
						<ProductPageAccordion
							accordionDetails={product.description}
							accordionName='Description'
						/>
						<hr className='border border-colorFour mt-6' />
					</section>
					<section className='mt-20'>
						<h3 className='font-oswald text-4xl font-semibold tracking-tight text-colorFive mb-2'>
							YOU MIGHT ALSO LIKE
						</h3>
						<div className='grid grid-cols-3 gap-x-2 md:grid-cols-2 xl:grid-cols-3'>
							<ProductItem
								imgUrl='https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
								name='Necklace Silver'
								price='PKR 2300'
								alt='alt img'
								height={200}
							/>
							<ProductItem
								imgUrl='https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
								name='Necklace Silver'
								price='PKR 2300'
								alt='alt img'
								height={200}
							/>
							<div className='md:hidden xl:block'>
								<ProductItem
									imgUrl='https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
									name='Necklace Silver'
									price='PKR 2300'
									alt='alt img'
									height={200}
								/>
							</div>
						</div>
					</section>
				</section>
			</div>
			<section
				className={`sm:px-16 px-8 mt-16 w-full ${
					product?.reviewsOverview.total > 0 ? 'block' : 'hidden'
				}`}
				id='reviews'
			>
				<h2 className='font-oswald text-5xl font-semibold text-colorFive tracking-tight'>
					REVIEWS
				</h2>
				<div className='bg-colorOne sm:mt-10 mt-5 py-7 sm:px-7 px-3 xl:grid xl:grid-cols-3 xl:items-center text-center sm:text-left'>
					<div className='font-colorFive font-roboto'>
						<span className='text-9xl font-bold'>
							{product.reviewsOverview.rating}
						</span>
						<span className='text-4xl'>/</span>
						<span className='text-lg font-bold'>5</span>
						<br className='xl:hidden' />
						<span className='xl:ml-10 ml-2 font-nunito'>
							({product.reviewsOverview.total} reviews)
						</span>
					</div>
					<div className='h-full border-l-2 border-colorFive mx-auto hidden xl:block'></div>
					<div className='xl:justify-self-center mt-3 xl:mt-0 w-fit mx-auto sm:mx-0'>
						<RatingsFilter
							analytics={reviewsAnalytics}
							overview={product.reviewsOverview}
							isLoading={isAnalyticsLoading}
							isError={isAnalyticsError}
							error={analyticsError}
							setFilter={setFilter}
							filter={filter}
						/>
					</div>
				</div>
				<button
					className={`float-right border-colorOne border rounded-md px-2 mt-1 ${
						filter === 0 ? 'hidden' : 'block'
					}`}
					onClick={() => setFilter(0)}
				>
					clear filter
				</button>
				<ReviewsSection
					reviews={reviews}
					isReviewLoading={isReviewLoading}
					reviewsAnalytics={reviewsAnalytics}
					isAnalyticsLoading={isAnalyticsLoading}
					isAnalyticsError={isAnalyticsError}
					analyticsError={analyticsError}
					filter={filter}
					setFilter={setFilter}
					page={page}
					pageLimit={pageLimit}
					paginationData={paginationData}
					onChangePage={handleChangePage}
				/>
			</section>
		</div>
	);
}
