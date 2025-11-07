import axios from "axios";

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Request interceptor
api.interceptors.request.use(
	(config) => {
		// Add auth token if available
		const token = localStorage?.getItem("auth_token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Response interceptor
api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// Handle common errors here
		if (error.response?.status === 401) {
			// Handle unauthorized access
			localStorage?.removeItem("auth_token");
			// Redirect to login if needed
		}
		return Promise.reject(error);
	}
);
