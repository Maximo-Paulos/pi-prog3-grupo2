import React, { Component } from "react";

class Resultados extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultados: [],
            cargando: true
        };
    }
    obtenerEndpoint() {
        if (this.props.match.params.tipo === "series") {
            return "search/tv";
        }

        return "search/movie";
    }

    pedirResultados() {
        let endpoint = this.obtenerEndpoint();
        let busqueda = this.props.match.params.busqueda;

        let url = "https://api.themoviedb.org/3/" + endpoint + "?api_key=76928f90251fae431e5a99af6dc4662c&query=" + busqueda;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    resultados: data.results,
                    cargando: false
                });
            })
            .catch((error) => {
                console.log("El error fue: " + error);
            });
    }

    componentDidMount() {
        this.pedirResultados();
    }

    render() {
        return (
            <div>
                <h2>Resultados de búsqueda</h2>
                {this.state.cargando ? (
          <h3>Cargando...</h3>
        ) : (
          <h3>Resultados recibidos</h3>
        )}
            </div>
            
        );
    }
}

export default Resultados;