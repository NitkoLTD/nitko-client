import axios from 'axios';

const baseUrl = 'https://nitko-api.onrender.com/api/';

const tokenString = localStorage.getItem('authTokens');
const token = tokenString ? JSON.parse(tokenString) : null;
const access = token ? token.access : null;

const axiosInstance = axios.create({
	baseURL: baseUrl,
	timeout: 5000,
	headers: {
		Authorization: access ? 'JWT ' + access : null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

export default axiosInstance;
