import { useAppDispatch } from "../../redux/hooks";
import "./filtros.css";
import { setSearchParam } from "../../redux/personajesSlice";
import { FormEvent } from "react";
import { setInitialState } from "../../redux/pageSlice";

/**
 * 
 * @returns Componente que retorna una textBox para el filtrado de personajes
 * Trabaja con handleChange, es decir, se actualiza la búsqueda de personajes a cada caracter que el usuario ingresa
 */
const Filtros = () => {
  const dispatch = useAppDispatch();

  /**
   * Función handleChange que actualiza el parámetro de búsqueda, para mostrar los personajes filtrados
   * @param e Evento de cambio de caracteres delntro del area de input
   * 
   */
  const handleChange = (e: FormEvent<HTMLElement>) => {
    console.log((e.target as HTMLTextAreaElement).value)
    dispatch(setInitialState());
    dispatch(setSearchParam((e.target as HTMLTextAreaElement).value));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        id="searchParam"
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filtros;
