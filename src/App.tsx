import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/header/Header";
import { DishScreen } from "./screens/dish-screen/DishScreen";
import { SportsScreen } from "./screens/sports-screen/SportsScreen";
import { HomeScreen } from "./screens/home-screen/HomeScreen";
import { InfoContext } from "./context/InfoContext";
import "./styles/globals.scss";
import styles from "./App.module.css";
import { CardProps } from './components/Types'

function App() {
  const [data, setData] = useState<CardProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  let value = { data, setData, loading, setLoading, error, setError };

  return (
    <Router>
      <div className={"App " + styles.App}>
        <Header />
        <InfoContext.Provider value={value}>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/dishscreen' element={<DishScreen />} />
            <Route path='/sportsscreen' element={<SportsScreen />} />
          </Routes>
        </InfoContext.Provider>
      </div>
    </Router>
  );
}

export default App;
