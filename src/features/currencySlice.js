import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rates: {},
    lastUpdated: null,
    loading: false,
    error: null,
    isOffline: false,
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setRates: (state, action) => {
            state.rates = action.payload.rates;
            state.lastUpdated = action.payload.time;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setOffline: (state, action) => {
            state.isOffline = action.payload;
        },
    },
});

export const { setRates, setLoading, setError, setOffline } = currencySlice.actions;
export default currencySlice.reducer;
