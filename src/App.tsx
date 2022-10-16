import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DishScreen } from "./screens/dish-screen/DishScreen";
import "./App.css";
import { Header } from "./components/layout/header/Header";
import { SportsScreen } from "./screens/sports-screen/SportsScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/dishes" exact>
          <DishScreen />
        </Route>
        <Route path="/cars" exact>
          <SportsScreen />
        </Route>
      </Router>
    </div>
  );
}

export default App;
