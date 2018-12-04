import React from 'react';
import IngredientList from 'Presentational/IngredientList';
export default class HomeContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {ingredient:''};
  }


  render(){
    return <div>
      <IngredientList
        elements={this.props.getState().ingredients}
        onChange={e => this.setState({ingredient:e.target.value})}
        dispatch={this.props.dispatch}
        ingredient={this.state.ingredient}
        increment={this.props.increment}
        decrement={this.props.decrement}
        addIngredient={this.props.addIngredient}
        removeIngredient={this.props.removeIngredient}
        getState={this.props.getState}
        clean={() => this.setState({ingredient:''})}
        />
    </div>;
  }
}
