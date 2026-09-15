import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav>
            <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favoritos">Favoritos</Link>
                </li>
                <li className="nav-item ml-auto">
                    <Link className="nav-link" to="/register">Registrarse</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Iniciar sesión</Link>
                </li>
                <li className="nav-item">
                    {props.usuario} <img src={props.foto} alt={"Foto de " + props.usuario} />
                </li>
            </ul>
        </nav>
    );
}

export default Header;
