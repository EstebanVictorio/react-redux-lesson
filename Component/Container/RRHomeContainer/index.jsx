import React from 'react';
import {connect} from 'react-redux';

import CurrentIngredient from './CurrentIngredient';
const mapStateToProps = (state, ownProps) =>
  (
    {
      ingredientID: state.ingredientID,
      ingredients: state.ingredients
    }
  );

const RRHomeContainer = connect(mapStateToProps)(CurrentIngredient);

export default RRHomeContainer;
