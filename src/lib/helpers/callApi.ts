import axios, { AxiosInstance, AxiosResponse } from "axios";
import { BACKEND_URL } from "../utils/env.util";

const api: AxiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: 6000
})

interface ApiError {
    message: string;
    status: string | number;
    error?: unknown;
  }

export const callApi = async (endpoint: `/${string}`, method: 'POST' | 'GET' = 'GET', data?: Record<string, unknown> | FormData) => {
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