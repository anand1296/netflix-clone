import { RequestOptions } from 'https';
import { useEffect, useState } from 'react';
import { URL } from 'url';

type FetchState<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
};

export default function useFetch<T>(
    url: string | URL,
    options: RequestInit = {}
): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        (async () => {
            setLoading(true);
            try {
                const resp = await fetch(url, { ...options, signal });
                if (!resp.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await resp.json();
                setData(data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();

        return () => {
            controller.abort();
        };
    }, [url, options]);

    return { data, loading, error };
}
