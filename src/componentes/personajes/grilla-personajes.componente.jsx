import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { buscarTodos, buscarPersonajes } from "../../services/personajes.service";
import { Personaje } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { guardarPersonajes, guardarPersonajesT} from "../../redux/personajesSlice";
import { setTotalPages } from "../../redux/pageSlice";
/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
const GrillaPersonajes = () => {
  const dispatch = useAppDispatch();

  const pageStatus=useAppSelector((state)=>state.personajes.status)
  const actualPage = useAppSelector((state) => state.page.page);
  const searchParam=useAppSelector((state)=>state.personajes.searchParam)

  //const [page, setPage] = useState(actualPage);
  //const [personajesS, setPersonajes] = useState([]);

  const personajes = useAppSelector((state) => state.personajes);
  // useEffect(() => {
  //   setPage(actualPage);
  //   console.log("en grilla personajes, pg es " + page);
  //}, [actualPage]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["personajes", actualPage, searchParam],
    queryFn: () => buscarPersonajes(actualPage, searchParam),
  });

  if(isError){
    console.log("error", error)
  }
  if(isLoading){
    console.log("loading", isLoading)
  }

  if (data){
   // console.log("data del query:", data.results)
   // console.log("data filtroBeth:", data.results.filter((pers)=>pers.name.includes("Smith")))
       //setPersonajes(data.results);
       dispatch(guardarPersonajes(data.results));
       dispatch(setTotalPages(data.info.pages))
  
  // useQuery({queryKey:["obtenerPersonajes"], queryFn: buscarTodos(page)}, {
    
  //   onSuccess: (data) => {
  //     console.log("data del query:", data.results)
  //     setPersonajes(data.results);
  //     dispatch(guardarPersonajes(data.results));
  //   }
  // });

  // if (isLoading) {
  //   <div className="grilla-personajes">Loading</div>;
  // }
  //dispatch(guardarPersonajes); //NO LOGRO GUARDARLOS EN EL STATE

  // else if (data.results) {
  //if (personajesS) {
    //const personajes= useAppSelector((state)=>state.personajes.personajes)
    return (
      <div className="grilla-personajes">
        {/* {console.log(personajes)} */}
        {/* <h1>h1 {console.log("isLoadinfg", isLoading, "error", error, data)}</h1> */}
        {personajes.personajes.map((personaje) => (
          <TarjetaPersonaje
            key={personaje.id}
            // name={personaje.name}
            // image={personaje.image}
            personaje={personaje}
            fav={false}
          />
        ))}
      </div>
    );
  }
};

export default GrillaPersonajes;
