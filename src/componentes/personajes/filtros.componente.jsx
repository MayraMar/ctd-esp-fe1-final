import { useAppDispatch } from "../../redux/hooks";
import "./filtros.css";
import { setSearchParam } from "../../redux/personajesSlice";

const Filtros = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    dispatch(setSearchParam(e.target.value));
  };

  return (
    <div className="filtros">
      <label for="nombre">Filtrar por nombre:</label>
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
