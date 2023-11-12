import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { fetchCars } from './operations';

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};
const handleFulfilled = state => {
    state.isLoading = false;
};
const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload.error;
};

const initialState = {
    cars: [],
    filter: '',
    favourite: '',
    error: null,
    isLoading: false,
    isRefreshing: false,
};

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setFilter(state, { payload }) {
            state.filter = payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(fetchCars.fulfilled, (state, { payload }) => {
                state.cars = payload;
            })
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
            .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected),
});


const persistConfig = {
    key: 'favourites',
    storage,
    whitelist: ['favourites'],
};

export const carsReducer = persistReducer(
    persistConfig,
    carsSlice.reducer
);

export const { setFilter } = carsSlice.actions;
