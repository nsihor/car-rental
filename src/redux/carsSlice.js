import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { fetchCars } from './operations.js';

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
    favourite: [],
};

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setFilter(state, { payload }) {
            state.filter = payload;
        },
        changeFavourite(state, {payload}) {
            const isAlreadyFavourite = state.favourite.includes(payload);

            if (isAlreadyFavourite) {
                state.favourite = state.favourite.filter(item => item !== payload);
            } else {
                state.favourite.push(payload);
            }
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
    key: 'cars',
    storage,
    whitelist: ['favourite'],
};

export const carsReducer = persistReducer(
    persistConfig,
    carsSlice.reducer
);

export const { setFilter, changeFavourite } = carsSlice.actions;
