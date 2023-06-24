import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { buscarTodos } from "../../services/personajes.service";
import { Personaje } from "../../types/types";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
const GrillaPersonajes = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["personajes"],
    queryFn: () => buscarTodos(page),
  });

  if(isLoading){
    <div className="grilla-personajes">
        Loading
    </div>
  } else
  return (
    <div className="grilla-personajes">
      {/* <h1>h1 {console.log("isLoadinfg", isLoading, "error", error, data)}</h1> */}
      {data.results.map((personaje) => (
        <TarjetaPersonaje key={personaje.id} name={personaje.name} image={personaje.image} />
      ))}
    </div>
  );
};

export default GrillaPersonajes;
