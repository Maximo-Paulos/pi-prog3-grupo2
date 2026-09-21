import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();


class Favoritos extends Component {
    render() {
        return (
            <div>
                <h1>Favoritos</h1>
            </div>
        );
    }
}

export default Favoritos;