import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<{ accessToken: string, refreshToken: string }>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        removeToken: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});

export const {setToken, removeToken} = authSlice.actions;

export default authSlice.reducer;
