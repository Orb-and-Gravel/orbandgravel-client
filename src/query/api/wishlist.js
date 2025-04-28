import { axiosbase } from '../../axiosConfig';

export async function getWishlist() {
	return await axiosbase.get('/wishlist/fetch');
}

export async function checkWishlistItem(productId) {
	const params = {
		product: productId,
	};
	return await axiosbase.get('/wishlist/check', { params });
}

export async function toggleWishlistItem(productId) {
	const body = {
		product: productId,
	};
	return await axiosbase.post('/wishlist/toggle', { ...body });
}

export async function removeWishlistItem(productId) {
	const params = {
		product: productId,
	};
	return await axiosbase.delete('/wishlist/remove', { params });
}
