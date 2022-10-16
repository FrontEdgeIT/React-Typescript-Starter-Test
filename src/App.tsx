import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Foods } from "./components/foods/Foods";
import "./App.css";
import { Header } from "./components/layout/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/foods" exact>
          <Foods />
        </Route>
      </Router>
    </div>
  );
}

export default App;
