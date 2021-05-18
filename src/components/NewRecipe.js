import React, { useState, useEffect } from 'react';
import { withRouter, Link } from "react-router-dom";

const NewRecipe = (props) => {
    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [tags, setTags] = useState("");
    const [preparation, setPreparation] = useState("");
    const [newRecipe, setnewRecipe] = useState({});

    const combineRecipe = (event) => {
        event.preventDefault(event);
        const ingredientsList = ingredients.split(",")
        const tagsList = tags.split(",")
        setnewRecipe({
            name: name,
            duration: duration,
            ingredients: ingredientsList,
            tags: tagsList,
            preparation: preparation,
        });
    }

    useEffect(() => {
        if (Object.keys(newRecipe).length !== 0) {
          props.addRecipe(newRecipe);
          props.history.push("/");
          setnewRecipe({});
        }
      }, [newRecipe, props]);
    return (
        <div>  
        <h1>UUS RETSEPT</h1>
        <Link to="/">TAGASI</Link>
        <form class="newrecipebox" onSubmit={event => combineRecipe(event)}>
        <label>Nimi*</label>
        <input required onInput = {(event) => {setName(event.target.value)}}/>
        <label >Valmistusaeg (minutites)</label>
        <input type='number' onInput = {(event) => {setDuration(event.target.value)}}/>
        <label>Koostisained (Eralda komadega)</label>
        <input id='text' onInput = {(event) => {setIngredients(event.target.value)}}/>
        <label>Sildid (Eralda komadega!) max 2</label>
        <input onInput = {(event) => {setTags(event.target.value)}}/>
        <label>Valmistamine</label>
        <textarea onInput = {(event) => {setPreparation(event.target.value)}}/>
        <input type="submit" class="submit" value="Lisa retsept"></input>
        </form>
        </div>
    )
}
export default withRouter(NewRecipe);