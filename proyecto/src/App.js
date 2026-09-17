import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Switch>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
