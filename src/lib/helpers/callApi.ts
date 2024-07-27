import axios, { AxiosInstance, AxiosResponse } from "axios";
import { BACKEND_URL } from "../utils/env.util";
import { useAuthSessionStore } from "@/store/sessionStore";

const api: AxiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: 6000
})

interface ApiError {
    message: string;
    status: string | number;
    error?: any;
}

api.interceptors.request.use((config) => {
    const token = useAuthSessionStore.getState().token
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})

export const callApi = async (endpoint: string, method: 'POST' | 'GET' = 'GET', data?: Record<string, unknown> | FormData) => {
    try {
        const config = {method, url: endpoint, ...(data && {data})}
        const response: AxiosResponse = await api(config)
        console.log('axios response', response)
        return { data: response.data }
    } catch (error) {
        let apiError: ApiError | undefined
        if(axios.isAxiosError(error)) {
            apiError = {
                message: error.response?.data?.message,
                status: error.response?.status || 'Error',
                error: error.response?.data
            }
        }

        console.log('api Error:', apiError)

        return  { error: apiError }
    }
}