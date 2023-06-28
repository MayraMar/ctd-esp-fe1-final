import { useQuery } from "@tanstack/react-query";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { buscarPersonajes } from "../../services/personajes.service";
import { Personaje } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { guardarPersonajes } from "../../redux/personajesSlice";
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
  const actualPage: number = useAppSelector((state) => state.page.page);
  const searchParam: string = useAppSelector((state) => state.personajes.searchParam);

  const personajes: Personaje[] = useAppSelector((state) => state.personajes.personajes);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["personajes", actualPage, searchParam],
    queryFn: () => buscarPersonajes(actualPage, searchParam),
  });

  if (isError) {
    console.log("error", error);
  }
  if (isLoading) {
    console.log("loading", isLoading);
  }
  if (data) {
    dispatch(guardarPersonajes(data.results));
    dispatch(setTotalPages(data.info.pages));
    return (
      <div className="grilla-personajes">
        {personajes.map((personaje) => (
          <TarjetaPersonaje
            key={personaje.id}
            personaje={personaje}
            fav={false}
          />
        ))}
      </div>
    );
  }
};

export default GrillaPersonajes;
