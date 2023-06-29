import "./paginacion.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { nextPage, previousPage } from "../../redux/pageSlice";
import { setPending } from "../../redux/personajesSlice";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion = () => {
  const dispatch = useAppDispatch();
  const actualPage = useAppSelector((state) => state.page.page);
  const totalPages = useAppSelector((state) => state.personajes.totalPages);

  /**
   * Función que modifica la página actual en el store, mediante un dispatcher.
   * Se dispara al clickear el botón "Anterior"
   * @param no recibe parámetros
   * @returns null
   */
  const handlePrevious = () => {
    if (actualPage > 1) {
      dispatch(setPending());
      dispatch(previousPage());
    }
  };
  /**
   * Función que modifica la página actual en el store, mediante un dispatcher.
   * Se dispara al clickear el botón "Siguiente"
   * @param no recibe parámetros
   * @returns null
   */
  const handleNext = () => {
    if (actualPage < totalPages) {
      dispatch(setPending());
      dispatch(nextPage());
    }
  };

  return (
    <div className="paginacion">
      <button
        onClick={handlePrevious}
        disabled={actualPage === 1 ? true : false}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        onClick={handleNext}
        disabled={actualPage === totalPages ? true : false}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
