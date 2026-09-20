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

    render() {
        return (
            <div className="container">
                <h2>Crear cuenta</h2>
            </div>
        );
    }
}

export default Register;