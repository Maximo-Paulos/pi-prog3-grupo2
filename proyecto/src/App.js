import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import NotFound from "./screens/NotFound/NotFound";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Detalle from "./screens/Detalle/Detalle";
import PeliculasPopulares from "./screens/PeliculasPopulares/PeliculasPopulares";
import Favoritos from "./screens/Favoritos/Favoritos";
import Resultados from "./screens/Resultados/Resultados";


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main"> 
       <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/detalle/:tipo/:id" exact={true} component={Detalle} />
        <Route path="/favoritos" exact={true} component={Favoritos} />
        <Route path="/peliculas/populares" exact={true} component={PeliculasPopulares} />
        <Route path="/resultados/:tipo/:busqueda" exact={true} component={Resultados} />
        <Route component={NotFound} />
      </Switch>
      </main>

      <Footer />
    </div>
  );
}


export default App;