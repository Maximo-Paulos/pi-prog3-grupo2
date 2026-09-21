import React, { Component } from "react";

class Resultados extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultados: [],
      cargando: true
    };
  }

  render() {
    return (
      <div>
        <h2>Resultados de búsqueda</h2>
      </div>
    );
  }
}

export default Resultados;