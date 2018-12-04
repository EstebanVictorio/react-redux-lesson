import {INCREMENT,DECREMENT, ADD_INGREDIENT,REMOVE_INGREDIENT} from './ActionTypes';

const ingredientID = (state = 1, action) => {
  switch(action.type){
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    default:
      return state;
  }
};

const ingredient = (state,action) => {
  switch(action.type){
    case ADD_INGREDIENT:
      return {
          id: action.id,
          name: action.name
        };
    default:
      return state;
  }
};


const ingredients = (state = [], action) => {
  switch(action.type){
    case ADD_INGREDIENT:
      return [
        ...state,
        ingredient(undefined, action)
      ];
    case REMOVE_INGREDIENT:
      let newList = state;
      newList.pop();
      return newList;
    default:
      return state;
  }
};


export default {ingredientID,ingredients};
