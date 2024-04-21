import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.slice';
import moviesReducer from './movies.slice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
