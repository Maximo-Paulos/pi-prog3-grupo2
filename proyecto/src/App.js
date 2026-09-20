import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/home";
import Login from "./components/Login/Login";


function App() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
