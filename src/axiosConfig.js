import axios from 'axios';
import { store } from './redux/store';
import {
	setAccessToken,
	setSignedInUser,
	logoutUser,
} from './redux/slices/userSlice';

export const axiosbase = axios.create({
	baseURL: import.meta.env.VITE_BASEURL,
	withCredentials: true,
});

axiosbase.interceptors.request.use((config) => {
	const token = store.getState().user.accessToken;
	if (token) {
		config.headers.Authorization = `bearer ${token}`;
	}
	return config;
});

let refreshPromise = null;

function isAuthEndpoint(url) {
	if (!url) return false;
	return (
		url.endsWith('/user/refresh') ||
		url.endsWith('/user/signIn') ||
		url.endsWith('/user/signUp') ||
		url.endsWith('/user/signOut')
	);
}

axiosbase.interceptors.response.use(
	(response) => response,
	async (error) => {
		const original = error.config;
		const status = error.response && error.response.status;

		if (
			status !== 401 ||
			!original ||
			original._retried ||
			isAuthEndpoint(original.url)
		) {
			return Promise.reject(error);
		}

		original._retried = true;

		try {
			if (!refreshPromise) {
				refreshPromise = axiosbase
					.post('/user/refresh')
					.then((res) => res.data)
					.finally(() => {
						refreshPromise = null;
					});
			}
			const data = await refreshPromise;
			store.dispatch(setAccessToken(data.accessToken));
			store.dispatch(setSignedInUser(data.user));
			original.headers.Authorization = `bearer ${data.accessToken}`;
			return axiosbase(original);
		} catch (refreshErr) {
			store.dispatch(logoutUser());
			return Promise.reject(error);
		}
	}
);
