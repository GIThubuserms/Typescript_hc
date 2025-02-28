import { configureStore } from "@reduxjs/toolkit";
import CounterSlicer from '../reducers/index';


export const store =configureStore({
    reducer:{
      counter:CounterSlicer
    }
})


export  type storetype=ReturnType<typeof store.getState>