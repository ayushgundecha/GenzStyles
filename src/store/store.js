import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import logger from 'redux-logger';

const middleWares = [logger];
  


export const store=configureStore({
    reducer:rootReducer,
    middlaware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(middleWares),
  });