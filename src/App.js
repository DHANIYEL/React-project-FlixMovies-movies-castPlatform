import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect } from "react";
// 9333c6e3

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9333c6e3";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return <h1 className="App">APP</h1>;
};

export default App;
