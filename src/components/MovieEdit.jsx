const MovieEdit = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
  const titulo_componente = "Editar Película";

  const guardarEdicion = (e, id) => {
    e.preventDefault()
    
    //conseguir el target del evento
    let target = e.target

    //buscar el indice del objeto de la pelicula a actualizar
    const pelis_almacenadas = conseguirPeliculas()
    const indice = pelis_almacenadas.findIndex(peli => peli.id === id)
    
    //creo el objeto con el id del indice, con el titulo y descripcion del form
    let peli_actualizada = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value

    }

    //actualizar el elemento con ese indice
    pelis_almacenadas[indice] = peli_actualizada

    //guardar el array de objetos en el localstorage
    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas))

    //actualizar estados
    setListadoState(pelis_almacenadas)
    setEditar(0)
  }


  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={e => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        />
        <button type="submit" className="editar">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default MovieEdit;
