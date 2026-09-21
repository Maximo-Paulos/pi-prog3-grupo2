import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Detalle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contenido: "",
      esFavorito: false,
      cargando: true
    };
  }

  obtenerTipoApi() {
    if (this.props.match.params.tipo === "series") {
      return "tv";
    } else {
      return "movie";
    }
  }

  pedirContenido() {
    let url =
      "https://api.themoviedb.org/3/" +
      this.obtenerTipoApi() +
      "/" +
      this.props.match.params.id +
      "?api_key=76928f90251fae431e5a99af6dc4662c";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        
        let esFavorito = false;
        let favoritosStorage = localStorage.getItem("favoritos");

        if (favoritosStorage !== null) {
          let favoritos = JSON.parse(favoritosStorage);

          let favoritosEncontrados = favoritos.filter(
            (favorito) => favorito.id === data.id
          );

          esFavorito = favoritosEncontrados.length > 0;
        }

        this.setState({
          contenido: data,
          esFavorito: esFavorito,
          cargando: false
        });
      })
      .catch((error) => {
        console.log("El error fue: " + error);
      });
  }

  componentDidMount() {
    this.pedirContenido();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({ contenido: "", cargando: true }, () =>
        this.pedirContenido()
      );
    }
  }

  agregarQuitarFavorito() {
    let favoritos = [];
    let favoritosStorage = localStorage.getItem("favoritos");

    if (favoritosStorage !== null) {
      favoritos = JSON.parse(favoritosStorage);
    }

    let favoritosEncontrados = favoritos.filter(
      (favorito) => favorito.id === this.state.contenido.id
    );

    if (favoritosEncontrados.length > 0) {
      favoritos = favoritos.filter(
        (favorito) => favorito.id !== this.state.contenido.id
      );

      this.setState({ esFavorito: false });
    } else {
      favoritos.push(this.state.contenido);

      this.setState({ esFavorito: true });
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  render() {
    let contenido = this.state.contenido;
    let esPelicula = this.props.match.params.tipo === "peliculas";

    return (
      <div className="container">
        {this.state.cargando ? (
          <h3>Cargando...</h3>
        ) : (
          <div>
            <img
              src={"https://image.tmdb.org/t/p/w342" + contenido.poster_path}
              alt={contenido.title ? contenido.title : contenido.name}
            />

            <h2>{contenido.title ? contenido.title : contenido.name}</h2>

            <p>Calificación: {contenido.vote_average}</p>

            <p>
              Fecha de estreno:{" "}
              {esPelicula ? contenido.release_date : contenido.first_air_date}
            </p>

            {esPelicula ? <p>Duración: {contenido.runtime} minutos</p> : null}

            <p>Sinopsis: {contenido.overview}</p>

            <h3>Géneros</h3>
            <ul>
              {contenido.genres.map((genero) => (
                <li key={genero.id}>{genero.name}</li>
              ))}
            </ul>

          </div>
        )}
      </div>
    );
  }
}

export default Detalle;
