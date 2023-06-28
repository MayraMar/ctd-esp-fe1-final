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
  const actualPage = useAppSelector((state) => state.page.page);
  const searchParam = useAppSelector((state) => state.personajes.searchParam);

  const personajes = useAppSelector((state) => state.personajes);

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
