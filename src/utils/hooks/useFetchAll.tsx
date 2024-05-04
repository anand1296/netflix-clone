import { useEffect, useState } from 'react';
import { APP_CONSTANTS } from '../constants';

type endPoint = {
    name: string;
    url: URL;
};

const useFetchAll = (endpoints: Array<endPoint>) => {
    const [combinedResult, setCombinedResult] = useState<Record<
        string,
        any[]
    > | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        (async () => {
            try {
                const responses = await Promise.all(
                    endpoints.map((endpoint) =>
                        fetch(endpoint.url, {
                            ...APP_CONSTANTS.API.TMDB.OPTIONS,
                            signal,
                        })
                    )
                );
                const data = await Promise.all(
                    responses.map((response) => response.json())
                );
                const mergedResult = data.reduce((acc, current, index) => {
                    const endpointName = endpoints[index].name;
                    acc[endpointName] = current;
                    return acc;
                }, {});

                setCombinedResult(mergedResult);
            } catch (err) {
                console.log('Error fetching data', err);
            }
        })();

        return () => {
            controller.abort();
        };
    }, [endpoints]);

    return combinedResult;
};

export default useFetchAll;
