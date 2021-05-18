import React from "react";
import { useParams, Link } from "react-router-dom";


export const Recipe = ({recipes}) => {
    const id = useParams().id;
      console.log(recipes)
        return (
          <div class="recipe-list">
            <Link to="/">TAGASI</Link>
            <h2>{recipes[id].name}</h2>
            <p>{recipes[id].duration} min</p>
            <ul>{recipes[id].ingredients.map((ingredient) => {
              return <li key={ingredient}>{ingredient}</li>;})}</ul>
              <p>{recipes[id].preparation}</p>
          </div>
  )
}

export default Recipe;