import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer/userReducer";
import { serviceReducer } from "./services/servicesReducer";


export const rootReducer = combineReducers({
    user:userReducer,
    services:serviceReducer
})