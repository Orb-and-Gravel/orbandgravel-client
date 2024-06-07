import { axiosbase } from '../../axiosConfig';

export async function getReviews(productId, page, filter) {
	const params = {
		product: productId,
		page,
		filter,
	};
	return await axiosbase.get('/review/get', { params });
}

export async function getReviewsAnalytics(productId) {
	const params = {
		product: productId,
	};
	return await axiosbase.get('/review/getAnalysis', { params });
}
