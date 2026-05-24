import { axiosbase } from '../../axiosConfig';
import Cookies from 'js-cookie';

export async function signIn(email, password) {
	const body = {
		email,
		password,
	};
	const signedUser = await axiosbase.post('/user/signIn', { ...body });
	if (signedUser.status === 200) {
		Cookies.set('token', signedUser.data.token);
	}
	return signedUser;
}

export async function signUp({ firstName, lastName, email, password }) {
	const body = { firstName, email, password };
	if (lastName) body.lastName = lastName;
	const newUser = await axiosbase.post('/user/signUp', body);
	if (newUser.status === 201 && newUser.data.token) {
		Cookies.set('token', newUser.data.token);
	}
	return newUser;
}
