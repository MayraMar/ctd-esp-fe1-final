
import { configureStore } from "@reduxjs/toolkit";
import { personajesSlice } from "./personajesSlice";
import { pageSlice } from "./pageSlice";
import { favoritosSlice } from "./favoritosSlice";
//import contadorReducer from "./contadorSlice";
//import { contadorSlice } from "./contadorSlice";
//import { tareasSlice } from "./tareasSlice";

export const store= configureStore({
    reducer: {
        personajes:personajesSlice.reducer,
        page:pageSlice.reducer,
        favoritos: favoritosSlice.reducer
    }
    
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch