import {useState} from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const MovieCreate = ({setListadoState}) => {
  const title = "Añadir Película";

  const [movie, setMovie] = useState({
    titulo: "",
    descripcion: "",
  });

  const {titulo, descripcion} = movie;

  const getFormValues = (e) => {
    //evitar el refresh de la pagina
    e.preventDefault();

    //obtengo datos del form
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //guardar los datos obtenidos en un objeto
    let peli = {
      id: new Date().getTime(),
      titulo: titulo,
      descripcion: descripcion,
    };

    setMovie(peli);

    setListadoState(elementos => {
      return [...elementos, peli]
    })

    //helper creado, haciendo la abstracción y quede reutilizable el metodo
    GuardarEnStorage("pelis", peli)


  };

  return (
    <div className="add">
      <h3 className="title">{title}</h3>
      <strong>
        {titulo && descripcion && "Has creado la película: " + titulo}
      </strong>

      <form onSubmit={getFormValues}>
        <input id="titulo" type="text" placeholder="Título" name="titulo" />
        <textarea
          id="descripcion"
          placeholder="Descripción"
          name="descripcion"
        ></textarea>
        <button type="submit" id="save">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default MovieCreate;
