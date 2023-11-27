import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import logger from "redux-logger";


const custommiddleWare = process.env.NODE_ENV === "development" ? [  logger] : [];

export const Store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(custommiddleWare)
})