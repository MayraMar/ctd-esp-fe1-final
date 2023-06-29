//import { useQuery } from "@tanstack/react-query";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { guardarPersonajesT } from "../../redux/personajesSlice";

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
  const actualPage: number = useAppSelector((state) => state.page.page);
  const searchParam: string = useAppSelector(
    (state) => state.personajes.searchParam
  );

  const { personajes, status } = useAppSelector((state) => state.personajes);

  useEffect(() => {
    dispatch(guardarPersonajesT({ page: actualPage, param: searchParam }));
  }, [actualPage, searchParam, dispatch]);

  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["personajes", actualPage, searchParam],
  //   queryFn: () => buscarPersonajes(actualPage, searchParam),
  // });
  
  if (status === "pending") {
    <h3>Cargando personajes...</h3>;
  } 

  if (status === "rejected") {
    return <h3>Error en la búsqueda. No se encontró a "{searchParam}".</h3>;
  }

    return (
      <div className="grilla-personajes">
        {personajes.map((personaje) => (
          <TarjetaPersonaje
            key={personaje.id}
            personaje={personaje}
            fav={false}
          />
        ))}
        ;
      </div>
    );
  }

export default GrillaPersonajes;
