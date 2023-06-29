import { agregarPersonaje, quitarPersonaje } from "../../redux/favoritosSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Personaje } from "../../types/types";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { useState } from "react";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

interface TarjetaProps {
 key: number,
 personaje: Personaje,
 fav: boolean
}

const TarjetaPersonaje = (props: TarjetaProps) => {
  const dispatch = useAppDispatch();
  const [isFav, setFav] = useState(props.fav);

  /**
   * Función que maneja el click en la estrella de favoritos.
   * Verifica el estado de la tarjeta: si es favorito, lo quita; y si no lo es, lo suma al listado de favoritos.
   * La variable isFav se utiliza asimismo para darle estilo al botón.
   */
  const handleClick = () => {
    if (isFav) {
      setFav(false);
      dispatch(quitarPersonaje(props.personaje.id));
    } else {
      setFav(true);
      dispatch(agregarPersonaje(props.personaje));
    }
  };

  return (
    <div className="tarjeta-personaje">
      <img src={props.personaje.image} alt="Rick Sanchez" />
      <div className="tarjeta-personaje-body">
        <span>{props.personaje.name}</span>
        <BotonFavorito esFavorito={localStorage.getItem(props.personaje.id as unknown as string)} onClick={handleClick} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
