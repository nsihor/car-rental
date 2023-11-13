import { createSelector } from '@reduxjs/toolkit';
export const getCars = state => state.cars.cars;

export const getFilter = state => state.cars.filter;

export const getFavourite = state => state.cars.favourite;

export const getFilteredContacts = createSelector(
    [getCars, getFilter],
    (cars, filter) =>
        cars.filter(car =>
            car.make.toLowerCase().includes(filter.toLowerCase())
        ) || cars
);
