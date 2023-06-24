import { Personaje, PersonajesResponse } from "../types/types"


const baseUrl= "https://rickandmortyapi.com/api/character"

export const buscarTodos = async (page: number): Promise<PersonajesResponse> =>{
    return fetch (`${baseUrl}/?page=${page}`)
    .then(data => data.json())
    .then(data => data)
}

export const buscarPorNombre = async (nombre?: string): Promise<Personaje[]> => {
    let params = "?"
    if (nombre){
        params += `name=${nombre}`
    }
    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
        .then(data => data.json())
        .then(data => data.results)
}