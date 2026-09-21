import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  controlarEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  controlarPassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  evitarSubmit(event) {
    event.preventDefault();

    let usuarios = [];
    let usuariosStorage = localStorage.getItem("usuarios");

    if (usuariosStorage !== null) {
      usuarios = JSON.parse(usuariosStorage);
    }

    let usuariosEncontrados = usuarios.filter(
      (usuario) => usuario.email === this.state.email && usuario.password === this.state.password
    );

    if (usuariosEncontrados.length === 0) {
      this.setState({
        error: "Credenciales incorrectas"
      });

      return;
    }
    
    cookies.set("user-auth-cookie", this.state.email);

    this.setState({
      error: ""
    });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={(event) => this.evitarSubmit(event)}>
          <div>
            <label>Email</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={(event) => this.controlarEmail(event)}
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={(event) => this.controlarPassword(event)}
            />
          </div>
          {this.state.error !== "" ? (
            <p>{this.state.error}</p>
          ) : null}
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    );
  }
}

export default Login;