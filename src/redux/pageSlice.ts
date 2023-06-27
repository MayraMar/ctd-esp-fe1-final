import {PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState={
  page: number,
  totalPages:number
}
const initialState: InitialState = {page :1, totalPages:1}

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page++
    },
    previousPage: (state) => {
      state.page--;
    },
    setTotalPages: (state, action:PayloadAction<number>)=>{state.totalPages=action.payload}
  },
  
});

export const { nextPage, previousPage, setTotalPages } = pageSlice.actions;
