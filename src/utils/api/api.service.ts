// apiService.ts
import axios, { AxiosRequestConfig } from 'axios';

const ApiService = (baseUrl: string) => {
    const httpClient = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const get = async <T>(
        path: string,
        params: AxiosRequestConfig['params'] = {}
    ): Promise<T> => {
        try {
            const response = await httpClient.get<T>(path, { params });
            return response.data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    };

    const post = async <T>(path: string, data: any = {}): Promise<T> => {
        try {
            const response = await httpClient.post<T>(path, data);
            return response.data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    };

    // Add other HTTP methods as needed (e.g., put, delete)

    return {
        get,
        post,
        // Add other methods here
    };
};

export default ApiService;
