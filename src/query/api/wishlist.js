import { axiosbase } from '../../axiosConfig';

export async function getWishlist() {
	return await axiosbase.get('/wishlist/fetch');
}

export async function checkWishlistItem(userId, productId) {
	const params = {
		product: productId,
		user: userId,
	};

	return await axiosbase.get('/wishlist/check', { params });
}

export async function toggleWishlistItem(productId) {
	const body = {
		product: productId,
	};
	return await axiosbase.post('/wishlist/toggle', { ...body });
}
