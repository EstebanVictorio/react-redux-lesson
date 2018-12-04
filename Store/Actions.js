import {INCREMENT, DECREMENT, ADD_INGREDIENT, REMOVE_INGREDIENT} from './ActionTypes';

const increment = id => ({type:INCREMENT, currentID: id});
const decrement = () => ({type:DECREMENT});
const addIngredient = (id,name) => ({type:ADD_INGREDIENT, id:id,name:name});
const removeIngredient = () => ({type:REMOVE_INGREDIENT});


export {increment, decrement,addIngredient, removeIngredient};
