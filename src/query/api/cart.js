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

export async function updateCartItemQuantity(cartId, productId, action) {
	const body = {
		cartId,
		productId,
		action,
	};
	return await axiosbase.patch('/cart/updateCartItemQuantity', { ...body });
}

export async function deleteCartProduct(cartId, productId) {
	const body = {
		productId,
		cartId,
	};
	return await axiosbase.patch('/cart/deleteCartItem', { ...body });
}
