import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
  Store,
  increment,
  decrement,
  addIngredient,
  removeIngredient
} from 'Store';
import RRHomeContainer from 'Container/RRHomeContainer';
let {subscribe, getState, dispatch} = Store;
let appContainer = document.querySelector('#app');

let App = () =>
  ReactDOM.render(
    <Provider store={Store}>
    <RRHomeContainer/>
    </Provider>,
    appContainer);
subscribe(App);
App();
