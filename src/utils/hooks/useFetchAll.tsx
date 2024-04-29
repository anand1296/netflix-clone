import { useEffect, useState } from 'react';

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
        (async () => {
            try {
                const responses = await Promise.all(
                    endpoints.map((endpoint) => fetch(endpoint.url))
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
    }, [endpoints]);

    return combinedResult;
};

export default useFetchAll;
