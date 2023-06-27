import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./filtros.css";
import { useQuery } from "react-query";
import { setSearchParam } from "../../redux/personajesSlice";
import { useState } from "react";
import { buscarPorNombre } from "../../services/personajes.service";

const Filtros = () => {
  //const {searchParam, setSearchParam}=useState("");

  const dispatch = useAppDispatch();

  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["personajesBuscados", searchParam],
  //   queryFn: () => buscarPorNombre(searchParam),
  // });

  //dispatch(guardarPersonajes(data.results));
  //const personajes=useAppSelector((state)=>state.personajes);

  const handleChange = (e) => {
    dispatch(setSearchParam(e.target.value));
    // let personajesBuscados=personajes.personajes.filter((personaje)=>personaje.name.includes(search))

    //   console.log("data del query:", personajesBuscados); //esto esta OK
    //   //setPersonajes(data.results);
    //   dispatch(guardarPersonajes(personajesBuscados));
  };

  return (
    <div className="filtros">
      <label for="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filtros;
