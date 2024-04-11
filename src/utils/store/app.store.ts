import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user.slice";

const appStore = configureStore({
    reducer: {
        user: userReducer
    }
})

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;