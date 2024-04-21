import { MOVIES_STUB } from '../mocks/movies.mocks';

//to be used only for local dev/testing
const useMock = (dataKey: string) => {
    return MOVIES_STUB[dataKey];
};

export default useMock;
