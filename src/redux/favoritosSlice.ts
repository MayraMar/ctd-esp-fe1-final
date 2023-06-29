import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Personaje } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
interface FavoritosState {
  personajesFavoritos: Personaje[],
}

const initialState: FavoritosState = {
  personajesFavoritos: [],
};

export const favoritosSlice = createSlice({
  name: "personajesFavoritos",
  initialState,
  reducers: {
    agregarPersonaje: (state, action: PayloadAction<Personaje>) => {
      state.personajesFavoritos.push(action.payload);
      localStorage.setItem(action.payload.id as unknown as string, "isFav")
    },
    quitarPersonaje: (state, action: PayloadAction<number>) => {
      state.personajesFavoritos=state.personajesFavoritos.filter(personaje=>personaje.id!==action.payload);
      localStorage.removeItem(action.payload as unknown as string)
    },
    eliminarFavoritos: (state)=>{
      state.personajesFavoritos=[];
      localStorage.clear();
    }
    
  },
  
});

export const { agregarPersonaje, quitarPersonaje, eliminarFavoritos } = favoritosSlice.actions;
