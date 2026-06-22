import { axiosbase } from '../../axiosConfig';

export async function signIn(email, password) {
	return axiosbase.post('/user/signIn', { email, password });
}

export async function signUp({ firstName, lastName, email, password }) {
	const body = { firstName, email, password };
	if (lastName) body.lastName = lastName;
	return axiosbase.post('/user/signUp', body);
}

export async function updateProfile({ firstName, lastName }) {
	return axiosbase.put('/user/profile', { firstName, lastName });
}

export async function refresh() {
	return axiosbase.post('/user/refresh');
}

export async function signOut() {
	return axiosbase.post('/user/signOut');
}

export async function me() {
	return axiosbase.get('/user/me');
}

export async function changePassword({ currentPassword, newPassword }) {
	return axiosbase.post('/user/change-password', {
		currentPassword,
		newPassword,
	});
}
