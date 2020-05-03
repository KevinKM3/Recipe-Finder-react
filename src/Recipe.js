import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ol>
        Ingredients
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories {Math.round(calories)}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
