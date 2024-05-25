import {createSlice} from '@reduxjs/toolkit';

interface ThemeState {
    value: boolean;
}

const initialState: ThemeState = {value: false};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.value = !state.value;
        },
    },
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;
