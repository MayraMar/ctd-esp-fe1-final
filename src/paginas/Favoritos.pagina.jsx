import { useAppDispatch, useAppSelector } from "../redux/hooks";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import "../componentes/personajes/grilla-personajes.css";
import { eliminarFavoritos } from "../redux/favoritosSlice";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const personajesFavoritos = useAppSelector(
    (state) => state.favoritos.personajesFavoritos
  );
  const dispatch = useAppDispatch();
/**
 * Función handleEliminar, elimina todos los favoritos al clickear el botón correspondiente.
 * Trabaja mediante un dispatcher, llamando a la función eliminar Favoritos en el Slice.
 * @returns void
 */
  const handleEliminar = () => dispatch(eliminarFavoritos());
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={handleEliminar}>
          Eliminar Favoritos
        </button>
      </div>
      <div className="grilla-personajes">
        {personajesFavoritos.map((personaje) => (
          <TarjetaPersonaje
            key={personaje.id}
            personaje={personaje}
            fav={true} // sacar el valor del localStorage
          />
        ))}
      </div>
    </div>
  );
};

export default PaginaFavoritos;
