import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Personaje } from "../types/types";

interface PersonajesState {
    personajes: Personaje[]
};

const initialState: PersonajesState={
    personajes: [],
}

export const personajesSlice=createSlice({
    name: "personajes",
    initialState,
    reducers: {
        filtrarPersonajes: (state, action: PayloadAction<string>)=>{
            //state.personajes.push(action.payload);
        },
        marcarFavorito: (state,action: PayloadAction<number>)=>{
            //state.tareas=state.tareas.filter(tarea=>tarea!==action.payload)
        },
        
    }
})

export const { filtrarPersonajes, marcarFavorito }=personajesSlice.actions