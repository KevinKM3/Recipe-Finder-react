import React from "react";
// Importing CSS module
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        Ingredients
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories {Math.round(calories)}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
