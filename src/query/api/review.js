import { axiosbase } from '../../axiosConfig';

export async function getReviews(productId) {
	const params = {
		product: productId,
	};
	return await axiosbase.get('/review/get', { params });
}
