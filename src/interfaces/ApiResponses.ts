export type ApiResponse<T = Record<string, unknown>> = {
	status: string;
	message: string;
	error?: Record<string, string[]> | string;
	data?: T;
};