import { useAppDispatch } from "../../redux/hooks";
import "./filtros.css";
import { setSearchParam } from "../../redux/personajesSlice";
import { FormEvent } from "react";

const Filtros = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: FormEvent<HTMLElement>) => {
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
