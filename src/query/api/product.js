import { axiosbase } from '../../axiosConfig';

export async function getProductsByCategory(categoryId) {
	const params = {
		category: categoryId,
	};
	return await axiosbase.get('/product/getCategoryProducts', { params });
}
