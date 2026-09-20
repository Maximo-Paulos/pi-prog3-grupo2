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
    const url = "76928f90251fae431e5a99af6dc4662c";

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
          <h3>Respuesta recibida</h3>
        )}

        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;