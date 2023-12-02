import { serviceTypes } from "./servicesReducer";



export const setServiceLoadingState = (booleanAction)=>{
    return{type:serviceTypes.setLoadingState, payload:booleanAction}
}


export const setServiceData= (Data)=>{
    return{type:serviceTypes.setService, payload:Data}
}