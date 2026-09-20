import React, { Component } from "react";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valor: "",
            datos: ""
        };
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        this.setState({ valor: event.target.value });
    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/movie/popular?api_key=76928f90251fae431e5a99af6dc4662c";

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ datos: data });
                console.log(data);
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

        <button type="submit" className="btn btn-success btn-sm">
          Buscar
        </button>
      </form>

      {this.state.datos === "" ? (
        <h3>Cargando...</h3>
      ) : (
        <div>
          <h2 className="alert alert-primary">Películas populares</h2>

          <section className="row cards" id="movies">
            {this.state.datos.results.map((pelicula) => (
              <article className="single-card-movie" key={pelicula.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
                  className="card-img-top"
                  alt={pelicula.title}
                />

                <div className="cardBody">
                  <h5 className="card-title">{pelicula.title}</h5>

                  <p className="card-text">{pelicula.overview}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
}
export default Home;