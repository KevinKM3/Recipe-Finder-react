import React, { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const APP_ID = "02593889";
  const APP_KEY = "f1a27600b3af976b81545aa415a13ff1	";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
