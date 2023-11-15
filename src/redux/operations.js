import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://655043927d203ab6626da7b6.mockapi.io/api';

export const fetchCars = createAsyncThunk(
    'cars/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios('/cars');
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

