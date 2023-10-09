import { useState } from "react"

const Search = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState("")
  const [noEncontrado, setNoEncontrado] = useState(false)

  const buscarPeli = (e) => {
    e.preventDefault()

    setBusqueda(e.target.value)
    console.log(busqueda);
    //Crear estado y actualizarlo

    //Listado completo de peliculas

    //Filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
    })
    //Comprobar si obtengo resultado/s
    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
      setNoEncontrado(true)
    } else {
      setNoEncontrado(false)
    }
    

    //Actualizar estado del listado principal con lo filtrado
    setListadoState(pelis_encontradas)
  }
  return (
    <div className="search">
                <h3 className="title">Buscador: {busqueda}</h3>
                {(noEncontrado === true && busqueda.length > 1) && 
                <span className="no-encontrado">No se ha encontrado coincidencia</span>

                }
                <form>
                    <input type="text"
                            id="search_field"
                            name="busqueda"
                            autoComplete="off"
                            value={busqueda}
                            onChange={buscarPeli}/>
                    <button>Buscar</button>
                </form>
            </div>
  )
}

export default Search