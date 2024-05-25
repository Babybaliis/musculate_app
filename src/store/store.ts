import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './hooks/themeSlice';
import authReducer from "./hooks/authSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
    },
});

export type RootState = {
    theme: ReturnType<typeof themeReducer>;
    auth: ReturnType<typeof authReducer>;
};

export type AppDispatch = typeof store.dispatch;
