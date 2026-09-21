import React from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Header(props) {
    function cerrarSesion() {
        cookies.remove("user-auth-cookie");
        props.history.push("/");
    }

    return (
        <header>
            <h1>
                <Link to="/">CineVerse</Link>
            </h1>

            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/listado/peliculas/populares">
                            Películas populares
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/listado/peliculas/en-cartel">
                            En cartel
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/listado/series/populares">
                            Series populares
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/listado/series/al-aire">
                            Al aire hoy
                        </Link>
                    </li>

                    {cookies.get("user-auth-cookie") ? (
                        <li className="nav-item">
                            <Link className="nav-link" to="/favoritos">
                                Favoritos
                            </Link>
                        </li>
                    ) : null}

                    {cookies.get("user-auth-cookie") ? (
                        <li className="nav-item">
                            <button
                                type="button"
                                className="nav-link"
                                onClick={() => cerrarSesion()}
                            >
                                Cerrar sesión
                            </button>
                        </li>
                    ) : null}

                    {cookies.get("user-auth-cookie") ? null : (
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">
                                Crear cuenta
                            </Link>
                        </li>
                    )}

                    {cookies.get("user-auth-cookie") ? null : (
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default withRouter(Header);