import React, { useState } from "react";
import "./App.css";
import Home from "./containers/home";
import ProductDetail from "./containers/detail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={ProductDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
