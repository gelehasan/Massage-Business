import { createSelector } from "reselect";


const ServicesState = (state)=> state.services;

export const ServicesSlice = createSelector(
    [ServicesState],
    (Services)=> Services
)


export const getAllServices = createSelector(
    [ServicesSlice],
    (Services)=> Services.serviceReducer
)

