import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: "",
      datos: "",
      datosEnCartel: ""
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  buscar(tipo) {
    if (this.state.valor !== "") {
      this.props.history.push("/resultados/" + tipo + "/" + this.state.valor);
    }
  }

  controlarCambios(event) {
    this.setState({ valor: event.target.value });
  }

  componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=76928f90251fae431e5a99af6dc4662c";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      })
      .catch((error) => {
        console.log("El error fue: " + error);
      });

    const urlEnCartel =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=76928f90251fae431e5a99af6dc4662c";

    fetch(urlEnCartel)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datosEnCartel: data }); 
      })
      .catch((error) => {
        console.log("El error fue: " + error);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Home</h2>

        <form
          className="search-form"
          onSubmit={(event) => this.evitarSubmit(event)}
        >
          <input
            type="text"
            name="searchData"
            placeholder="Buscar..."
            onChange={(event) => this.controlarCambios(event)}
            value={this.state.valor}
          />

          <button type="button" className="search-button" onClick={(event) => this.buscar("peliculas")}>
            Buscar Peliculas
          </button>
          <button type="button" className="search-button" onClick={(event) => this.buscar("series")}>
            Buscar series
          </button>
        </form>

        {this.state.datos === "" ? (
          <h3>Cargando...</h3>
        ) : (
          <div>
            <h2 className="alert alert-primary">Películas populares</h2>

            <section className="row cards" id="movies">
              {this.state.datos.results.map((pelicula) => (
                <MovieCard
                  key={pelicula.id}
                  pelicula={pelicula}
                  tipo="peliculas"
                  claseTarjeta="single-card-movie"
                />
              ))}
            </section>

            <Link className="btn btn-primary" to="/peliculas/populares">
              Ver todas
            </Link>
          </div>
        )}

        {this.state.datosEnCartel === "" ? (
          <h3>Cargando...</h3>
        ) : (
          <div>
            <h2 className="alert alert-primary">Películas en cartel</h2>

            <section className="row cards" id="now-playing">
              {this.state.datosEnCartel.results.map((pelicula) => (
                <MovieCard
                  key={pelicula.id}
                  pelicula={pelicula}
                  tipo="peliculas"
                  claseTarjeta="single-card-playing"
                />
              ))}
            </section>

            <Link className="btn btn-primary" to="/peliculas/en-cartel">
              Ver todas
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Home;