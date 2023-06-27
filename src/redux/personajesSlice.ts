import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Personaje, PersonajesResponse } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { buscarTodos } from "../services/personajes.service";

interface PersonajesState {
  personajes: Personaje[],
  status:string,
  searchParam: string
}

const initialState: PersonajesState = {
  personajes: [],
  status:"pending",
  searchParam:""
};

export const guardarPersonajesT = createAsyncThunk("personajes/saveAll", buscarTodos);

export const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    // filtrarPersonajes: (state, action: PayloadAction<string>) => {
    //   state.personajes = state.personajes.filter((personaje) =>
    //     {
    //       personaje.name.includes(action.payload);
    //       state.status="ready";
    //     }
    //   );
    // },
    marcarFavorito: (state, action: PayloadAction<number>) => {
      //state.tareas=state.tareas.filter(tarea=>tarea!==action.payload)
    },
    guardarPersonajes:(state, action: PayloadAction<Personaje[]>)=>{
        state.personajes=action.payload;
        state.status="ready";
    },
    setPending: (state)=>{state.status="pending"},
    setSearchParam:(state, action: PayloadAction<string>)=>{
      state.searchParam=action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      guardarPersonajesT.fulfilled,
      (state, action: PayloadAction<PersonajesResponse>) => {
        state.personajes = action.payload.results;
        state.status="succeeded"
      }
    );
  },
});

export const { marcarFavorito, guardarPersonajes, setPending, setSearchParam } = personajesSlice.actions;