import React, { Component } from "react";
import MovieCard from "../../components/Moviecard/MovieCard";

class PeliculasEnCartel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peliculas: [],
      pagina: 1,
      filtro: "",
      cargando: true
    };
  }

  pedirPeliculas(pagina) {
    let url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=76928f90251fae431e5a99af6dc4662c&page=" +
    pagina;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let peliculas = [];

        this.state.peliculas.map((pelicula) => peliculas.push(pelicula));
        data.results.map((pelicula) => peliculas.push(pelicula));

        this.setState({
          peliculas: peliculas,
          pagina: pagina,
          cargando: false
        });
      })
      .catch((error) => {
        console.log("El error fue: " + error);
      });
  }

  componentDidMount() {
    this.pedirPeliculas(1);
  }

  cargarMas() {
    this.pedirPeliculas(this.state.pagina + 1);
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({ filtro: event.target.value });
  }

  render() {
    let peliculasFiltradas = this.state.peliculas;

    if (this.state.filtro !== "") {
      peliculasFiltradas = this.state.peliculas.filter(
        (pelicula) => pelicula.title === this.state.filtro
      );
    }

    return (
      <div className="container">
        <h2 className="alert alert-primary">Películas en cartel</h2>

        <form onSubmit={(event) => this.evitarSubmit(event)}>
          <input
            type="text"
            placeholder="Filtrar por título..."
            onChange={(event) => this.controlarCambios(event)}
            value={this.state.filtro}
          />
        </form>

        {this.state.cargando ? (
          <h3>Cargando...</h3>
        ) : (
          <div>
            <section className="row cards">
              {peliculasFiltradas.map((pelicula, idx) => (
                <MovieCard
                  key={pelicula.id + "-" + idx}
                  pelicula={pelicula}
                  tipo="peliculas"
                  claseTarjeta="single-card-playing"
                />
              ))}
            </section>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.cargarMas()}
            >
              Cargar más
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default PeliculasEnCartel;
