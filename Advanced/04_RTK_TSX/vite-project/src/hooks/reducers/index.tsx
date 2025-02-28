import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit"

 const CounterSlicer=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
     increment:(state)=>state+=1,
     decrement:(state)=>state-=1,
     setcounter:(_,action:PayloadAction<number>)=>action.payload }
})


export const {increment,decrement,setcounter} =CounterSlicer.actions
export default  CounterSlicer.reducer