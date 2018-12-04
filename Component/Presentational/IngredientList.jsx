import React from 'react';

export default function IngredientList(props){
  let {elements = [], onChange, dispatch, getState, ingredient, addIngredient,
    removeIngredient, increment, decrement, clean} = props;
  return <div>
    <div>
      <input type="text" value={ingredient} onChange={onChange}/>
      <input type="button" onClick={() => {
          dispatch(increment());
          dispatch(addIngredient(getState().ingredientID,ingredient));
          clean();
        }}/>
      <input type="button" onClick={() => {
          dispatch(decrement());
          dispatch(removeIngredient());
        }}/>
    </div>
    <p>Ingredient List:</p>
    {
      elements.length !== 0 ?
        elements.map(element => <div key={element.id}>{element.id}.- {element.name}</div>):
        'No ingredients added yet'
    }
  </div>
}
