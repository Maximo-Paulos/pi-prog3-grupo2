import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Listado from "./components/Listado/Listado";
import Detalle from "./components/Detalle/Detalle";
import Favoritos from "./components/Favoritos/Favoritos";
import Resultados from "./components/Resultados/Resultados";


function App() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/register" exact={true} component={Register} />
          <Route path="/listado/:tipo/:categoria" exact={true} component={Listado} />
          <Route path="/detalle/:tipo/:id" exact={true} component={Detalle} />
          <Route path="/favoritos" exact={true} component={Favoritos} />
          <Route path="/resultados/:tipo/:busqueda" exact={true} component={Resultados}/>
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
} 


export default App;