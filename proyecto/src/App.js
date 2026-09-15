import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <Header/>
      <main className="flex-grow-1">
      </main>
      <Footer/>
    </div>
  );
}

export default App;
