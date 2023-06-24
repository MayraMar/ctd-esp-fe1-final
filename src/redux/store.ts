
import { configureStore } from "@reduxjs/toolkit";
//import contadorReducer from "./contadorSlice";
//import { contadorSlice } from "./contadorSlice";
//import { tareasSlice } from "./tareasSlice";

export const store= configureStore({
    reducer: {
        // counter: contadorSlice.reducer, 
        // tareas: tareasSlice.reducer
    }
    
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch