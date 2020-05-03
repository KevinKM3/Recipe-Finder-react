import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "02593889";
  const APP_KEY = "f1a27600b3af976b81545aa415a13ff1	";

  const [recipes, setRecipes] = useState([]);
  const [searc, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} />
        <button className="search-button" type="submit">
          {" "}
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
