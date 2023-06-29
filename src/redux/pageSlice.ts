import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  page: number;
};
const initialState: InitialState = { page: 1 };

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page++;
    },
    previousPage: (state) => {
      state.page--;
    },
    /**
     * Función que setea la página a 1.
     * @param state
     * @returns 
     */
    setInitialState:(state)=> initialState
  },
});

export const { nextPage, previousPage, setInitialState } = pageSlice.actions;
