import React, { Component } from "react";

class Register extends Component {
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
  }

  render() {
    return (
      <div className="container">
        <h2>Crear cuenta</h2>

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

          <button type="submit">Crear cuenta</button>
        </form>
      </div>
    );
  }
}

export default Register;