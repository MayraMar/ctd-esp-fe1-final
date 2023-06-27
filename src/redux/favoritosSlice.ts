import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Personaje, PersonajesResponse } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { buscarTodos } from "../services/personajes.service";

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
    },
    quitarPersonaje: (state, action: PayloadAction<number>) => {
      console.log("action payload:", action.payload)
      state.personajesFavoritos=state.personajesFavoritos.filter(personaje=>personaje.id!==action.payload)
    },
    eliminarFavoritos: (state)=>{
      state.personajesFavoritos=[];
    }
    
  },
  
});

export const { agregarPersonaje, quitarPersonaje, eliminarFavoritos } = favoritosSlice.actions;
