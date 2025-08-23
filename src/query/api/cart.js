import { axiosbase } from '../../axiosConfig';

export async function getCart(guestHash) {
	const params = {
		guestHash,
	};
	return await axiosbase.get('/cart/getCart', { params });
}

export async function addToCart(guestHash, productId) {
	const body = {
		productId,
		guestHash,
	};
	return await axiosbase.post('/cart/addToCart', { ...body });
}
