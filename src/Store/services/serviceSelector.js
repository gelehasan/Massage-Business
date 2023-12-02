import { createSelector } from "reselect";


const ServicesState = (state)=> state.services;

export const ServicesSlice = createSelector(
    [ServicesState],
    (Services)=> Services
)


export const getAllServices = createSelector(
    [ServicesSlice],
    (Services)=> Services.Services
)



export const Titles = createSelector(
    [getAllServices],
    (Services)=>{




      const Titles= [];

        Services.map((service)=>{
            Titles.push(service.id);
        })


        return Titles;

    }
)

