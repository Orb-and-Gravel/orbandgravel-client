import axios from 'axios';

export const axiosbase = axios.create({
	baseURL: import.meta.env.VITE_BASEURL,
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...
