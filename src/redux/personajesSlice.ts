import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Personaje, PersonajesResponse } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { buscarTodos, buscarPersonajes } from "../services/personajes.service";

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

//export const guardarPersonajesT = createAsyncThunk("personajes/saveAll", (page: number, param)=>buscarPersonajes(page, param));

export const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
 
    guardarPersonajes:(state, action: PayloadAction<Personaje[]>)=>{
        state.personajes=action.payload;
        state.status="ready";
    },
    setPending: (state)=>{state.status="pending"},
    setSearchParam:(state, action: PayloadAction<string>)=>{
      state.searchParam=action.payload;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //   .addCase(
  //     guardarPersonajesT.fulfilled,
  //     (state, action: PayloadAction<PersonajesResponse>) => {
  //       state.personajes = action.payload.results;
  //       state.status="succeeded"
  //     }
  //   )
  //   .addCase(
  //     guardarPersonajesT.pending,
  //     (state, action: PayloadAction<PersonajesResponse>) => {
        
  //       state.status="pending"
  //     }
  //   );
  // },
});

export const { guardarPersonajes, setPending, setSearchParam } = personajesSlice.actions;
export default personajesSlice