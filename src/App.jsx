import { useState } from "react";
import MovieCreate from "./components/MovieCreate"
import MovieList from "./components/MovieList"
import Search from "./components/Search"

function App() {
    
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>

        {/* menu de navegacion */}
        <nav className="nav">
            <ul>
                <li>
                    <a href="/#">Inicio</a>
                </li>
                <li>
                    <a href="/#">Peliculas</a>
                </li>
                <li>
                    <a href="/#">Blog</a>
                </li>
                <li>
                    <a href="/#">Contacto</a>
                </li>
            </ul>
        </nav>

        {/* contenido de la pagina */}
        <section className="content">
            <MovieList listadoState={listadoState} setListadoState={setListadoState}/>
        </section>

        {/* menu lateral */}
        <aside className="lateral">
            <Search listadoState={listadoState} setListadoState={setListadoState}/>

            <MovieCreate setListadoState={setListadoState}/>

        </aside>

        <footer className="footer">
            &copy; Master en Javascript
        </footer>
    </div>
  )
}

export default App
