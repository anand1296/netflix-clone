import { configureStore } from '@reduxjs/toolkit';
import reducers from './root-reducer';

const appStore = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
