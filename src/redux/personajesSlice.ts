import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Personaje } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { buscarPersonajes } from "../services/personajes.service";

interface PersonajesState {
  personajes: Personaje[];
  status: string;
  searchParam: string;
  totalPages: number;
}

const initialState: PersonajesState = {
  personajes: [],
  status: "pending",
  searchParam: "",
  totalPages: 0,
};

export const guardarPersonajesT = createAsyncThunk(
  "personajes/saveAll",
  async ({ page, param }: { page: number; param?: string }) => {
    return await buscarPersonajes(page, param);
  }
);

export const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    setPending: (state) => {
      state.status = "pending";
    },
    setSearchParam: (state, action: PayloadAction<string>) => {
      state.searchParam = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(guardarPersonajesT.pending, (state) => {
        state.status = "pending";
      })
      .addCase(guardarPersonajesT.fulfilled, (state, action) => {
        if (action.payload.info.count > 0) {
          state.personajes = action.payload.results;
          state.status = "succeeded";
          state.totalPages = action.payload.info.pages;
        } else {
          state.status = "rejected";
        }
      });
  },
});

export const { setPending, setSearchParam } = personajesSlice.actions;
export default personajesSlice;
