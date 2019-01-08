import React from "react";
import ReactDOM from "react-dom";
import FilmsList from "./pages/FilmsList";
import "react-table/react-table.css";
import "./styles.css";

function App() {
  return <FilmsList />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
