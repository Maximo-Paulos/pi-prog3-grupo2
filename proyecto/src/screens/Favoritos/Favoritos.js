import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Favoritos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoritos: []
    };
  }

  cargarFavoritos() {
    let favoritos = [];
    let favoritosStorage = localStorage.getItem("favoritos");

    if (favoritosStorage !== null) {
      favoritos = JSON.parse(favoritosStorage);
    }

    this.setState({
      favoritos: favoritos
    });
  }

  componentDidMount() {
    if (cookies.get("user-auth-cookie")) {
      this.cargarFavoritos();
    } else {
      this.props.history.push("/login");
    }
  }

  quitarFavorito(id) {
    let favoritos = this.state.favoritos.filter(
      (favorito) => favorito.id !== id
    );

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    this.setState({
      favoritos: favoritos
    });
  }

  render() {
    let peliculas = this.state.favoritos.filter(
      (favorito) => favorito.tipo === "peliculas"
    );

    let series = this.state.favoritos.filter(
      (favorito) => favorito.tipo === "series"
    );

    return (
      <div className="container">
        <h2 className="alert alert-primary">Películas favoritas</h2>

        <section className="row cards">
          {peliculas.map((favorito) => (
            <article className="single-card-movie" key={favorito.id}>
              <img
                src={"https://image.tmdb.org/t/p/w342" + favorito.poster_path}
                className="card-img-top"
                alt={favorito.title}
              />

              <div className="cardBody">
                <h5 className="card-title">{favorito.title}</h5>

                <Link
                  className="btn btn-primary"
                  to={"/detalle/peliculas/" + favorito.id}
                >
                  Ir a detalle
                </Link>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.quitarFavorito(favorito.id)}
                >
                  Quitar de favoritos
                </button>
              </div>
            </article>
          ))}
        </section>

        <h2 className="alert alert-primary">Series favoritas</h2>

        <section className="row cards">
          {series.map((favorito) => (
            <article className="single-card-movie" key={favorito.id}>
              <img
                src={"https://image.tmdb.org/t/p/w342" + favorito.poster_path}
                className="card-img-top"
                alt={favorito.name}
              />

              <div className="cardBody">
                <h5 className="card-title">{favorito.name}</h5>

                <Link
                  className="btn btn-primary"
                  to={"/detalle/series/" + favorito.id}
                >
                  Ir a detalle
                </Link>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.quitarFavorito(favorito.id)}
                >
                  Quitar de favoritos
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  }
}

export default Favoritos;
