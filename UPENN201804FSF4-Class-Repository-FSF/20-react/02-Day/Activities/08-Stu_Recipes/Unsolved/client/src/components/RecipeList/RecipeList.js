import React from "react";
import { RecipeListItem } from "./RecipeListItem";

// RecipeList renders a bootstrap list item
export const RecipeList = props => (
  <ul className="list-group">
      {props.data.map(recipe => {
        return <RecipeListItem 
                  title={recipe.title}
                  href={recipe.href}
                  ingredients={recipe.ingredients}
                  thumbnail={recipe.thumbnail}
                />
      })}
  </ul>
);
