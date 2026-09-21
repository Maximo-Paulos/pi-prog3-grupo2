import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

class Listado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contenidos: [],
      pagina: 1,
      filtro: "",
      cargando: true
    };
  }

  obtenerEndpoint() {
    let tipo = this.props.match.params.tipo;
    let categoria = this.props.match.params.categoria;

    if (tipo === "series" && categoria === "populares") {
      return "tv/popular";
    } else if (tipo === "series" && categoria === "al-aire") {
      return "tv/airing_today";
    } else if (tipo === "peliculas" && categoria === "en-cartel") {
      return "movie/now_playing";
    } else {
      return "movie/popular";
    }
  }

  obtenerTitulo() {
    let tipo = this.props.match.params.tipo;
    let categoria = this.props.match.params.categoria;

    if (tipo === "series" && categoria === "populares") {
      return "Series populares";
    } else if (tipo === "series" && categoria === "al-aire") {
      return "Series al aire hoy";
    } else if (tipo === "peliculas" && categoria === "en-cartel") {
      return "Películas en cartel";
    } else {
      return "Películas populares";
    }
  }

  pedirContenidos(pagina) {
    let url =
      "https://api.themoviedb.org/3/" +
      this.obtenerEndpoint() +
      "?api_key=76928f90251fae431e5a99af6dc4662c" +
      "&page=" +
      pagina;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let contenidos = [];

        for (let i = 0; i < this.state.contenidos.length; i++) {
          contenidos.push(this.state.contenidos[i]);
        }

        for (let i = 0; i < data.results.length; i++) {
          contenidos.push(data.results[i]);
        }

        this.setState({
          contenidos: contenidos,
          pagina: pagina,
          cargando: false
        });
      })
      .catch((error) => {
        console.log("El error fue: " + error);
      });
  }

  componentDidMount() {
    this.pedirContenidos(1);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.tipo !== this.props.match.params.tipo ||
      prevProps.match.params.categoria !== this.props.match.params.categoria
    ) {
      this.setState(
        { contenidos: [], pagina: 1, filtro: "", cargando: true },
        () => this.pedirContenidos(1)
      );
    }
  }

  cargarMas() {
    this.pedirContenidos(this.state.pagina + 1);
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({ filtro: event.target.value });
  }

  render() {
    let contenidosFiltrados = this.state.contenidos;

    if (this.state.filtro !== "") {
      contenidosFiltrados = this.state.contenidos.filter((contenido) => {
        let titulo = contenido.title ? contenido.title : contenido.name;
        return titulo === this.state.filtro;
      });
    }

    return (
      <div className="container">
        <h2 className="alert alert-primary">{this.obtenerTitulo()}</h2>

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
              {contenidosFiltrados.map((contenido, idx) => (
                <MovieCard
                  key={contenido.id + "-" + idx}
                  pelicula={contenido}
                  tipo={this.props.match.params.tipo}
                  claseTarjeta="single-card-movie"
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

export default Listado;
