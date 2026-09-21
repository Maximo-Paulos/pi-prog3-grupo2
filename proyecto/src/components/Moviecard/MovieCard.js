import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class MovieCard extends Component {
  constructor(props) {
    super(props);

    let esFavorito = false;
    let favoritosStorage = localStorage.getItem("favoritos");

    if (cookies.get("user-auth-cookie") && favoritosStorage !== null) {
      let favoritos = JSON.parse(favoritosStorage);

      let favoritosEncontrados = favoritos.filter(
        (favorito) => favorito.id === props.pelicula.id
      );

      esFavorito = favoritosEncontrados.length > 0;
    }

    this.state = {
      mostrarDescripcion: false,
      esFavorito: esFavorito
    };
  }

  mostrarOcultarDescripcion() {
    this.setState({
      mostrarDescripcion: !this.state.mostrarDescripcion
    });
  }

  agregarQuitarFavorito() {
    let favoritos = [];
    let favoritosStorage = localStorage.getItem("favoritos");

    if (favoritosStorage !== null) {
      favoritos = JSON.parse(favoritosStorage);
    }

    let favoritosEncontrados = favoritos.filter(
      (favorito) => favorito.id === this.props.pelicula.id
    );

    if (favoritosEncontrados.length > 0) {
      favoritos = favoritos.filter(
        (favorito) => favorito.id !== this.props.pelicula.id
      );

      this.setState({
        esFavorito: false
      });
    } else {
      let nuevoFavorito = this.props.pelicula;
      nuevoFavorito.tipo = this.props.tipo;
      favoritos.push(nuevoFavorito);

      this.setState({
        esFavorito: true
      });
    }


    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  render() {

    let titulo = this.props.pelicula.title
  ? this.props.pelicula.title
  : this.props.pelicula.name;

    return (
      <article className={this.props.claseTarjeta}>
        <img
          src={"https://image.tmdb.org/t/p/w342" + this.props.pelicula.poster_path}
          className="card-img-top"
          alt={titulo}
        />

        <div className="cardBody">
          <h5 className="card-title">{titulo}</h5>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.mostrarOcultarDescripcion()}
          >
            {this.state.mostrarDescripcion
              ? "Ocultar descripción"
              : "Ver descripción"}
          </button>

          {this.state.mostrarDescripcion ? (
            <p className="card-text">
              {this.props.pelicula.overview}
            </p>
          ) : null}

           <Link
             className="btn btn-primary"
             to={"/detalle/" + this.props.tipo + "/" + this.props.pelicula.id}

           >
            Ir a detalle
            </Link>

          {cookies.get("user-auth-cookie") ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.agregarQuitarFavorito()}
            >
              {this.state.esFavorito
                ? "Quitar de favoritos"
                : "Agregar a favoritos"}
            </button>
          ) : null}
        </div>
      </article>
    );
  }
}

export default MovieCard;