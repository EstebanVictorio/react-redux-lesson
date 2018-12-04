import {createStore, combineReducers} from 'redux';
import Reducers from './Reducers';
import {increment, decrement, addIngredient, removeIngredient} from './Actions';
let Store = createStore(combineReducers(Reducers));


export {Store,increment,decrement,addIngredient,removeIngredient};
