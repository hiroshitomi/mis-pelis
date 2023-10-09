import {useEffect, useState} from "react";
import MovieEdit from "./MovieEdit";

const MovieList = ({listadoState, setListadoState}) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPeli = (id) => {
    let pelisGuardadas = conseguirPeliculas();
    let nuevoArrayPelis = pelisGuardadas.filter(
      (peli) => peli.id != parseInt(id)
    );

    setListadoState(nuevoArrayPelis);
    localStorage.setItem("pelis", JSON.stringify(nuevoArrayPelis));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article className="peli-item" key={peli.id}>
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button className="edit" onClick={() => setEditar(peli.id)}>
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>

              {/* form para editar */}
              {editar === peli.id && (
                <MovieEdit
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay pelis para mostrar</h2>
      )}
    </>
  );
};

export default MovieList;
