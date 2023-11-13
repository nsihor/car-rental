// import { createSelector } from '@reduxjs/toolkit';
export const getCars = state => state.cars.cars;
// export const getCar = state => state.cars.car;

// export const getFilter = state => state.cars.filter;

export const getFavourite = state => state.cars.favourite;

// export const selectFilteredContacts = createSelector(
//     [getCars, getFilter],
//     (cars, filter) =>
//         cars.filter(contact =>
//             car.name.toLowerCase().includes(filter.toLowerCase())
//         ) || cars
// );