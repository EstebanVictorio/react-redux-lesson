import React from 'react';
import {
  addIngredient,
  removeIngredient,
  increment,
  decrement
} from 'Store/Actions';

export default function RRIngredientList(props){
  let {newIngredient, clean, onChangeIngredient, dispatch,ingredientID,ingredients}
    = props;
  return <div>
    <div>
      <input type="text" value={newIngredient} onChange={onChangeIngredient}/>
      <input type="button" value='Add Ingredient' onClick={() => {
        dispatch(increment(ingredientID));
        dispatch(addIngredient(ingredientID,newIngredient));
        clean();
        }}/>
      <input type="button" value='Remove Ingredient' onClick={() => {
        dispatch(decrement());
        dispatch(removeIngredient());
        }}/>
    </div>
    <p>Ingredient List:</p>
    {
        ingredients.length === 0 ?
        'No ingredients added yet':
        ingredients.map(ingredient =>
          <div key={ingredient.id}>{ingredient.id}.- {ingredient.name}</div>)
    }
  </div>
}
