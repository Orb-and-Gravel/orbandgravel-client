import { axiosbase } from '../../axiosConfig';

export async function getWishlist(userId) {
	const params = {
		user: userId,
	};
	return await axiosbase.get('/wishlist/fetch', { params });
}

export async function checkWishlistItem(userId, productId) {
	const params = {
		product: productId,
		user: userId,
	};

	return await axiosbase.get('/wishlist/check', { params });
}
