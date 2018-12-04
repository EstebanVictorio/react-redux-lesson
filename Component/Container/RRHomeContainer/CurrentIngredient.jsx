import React from 'react';
import RRIngredientList from 'Presentational/RRIngredientList';
export default class CurrentIngredient extends React.Component{
  constructor(props){
    super(props);
    this.state = {newIngredient:''};
  }

  render(){
    console.log(this.props);
    return <RRIngredientList
      newIngredient={this.state.newIngredient}
      onChangeIngredient={e => this.setState({newIngredient:  e.target.value})}
      clean={() => this.setState({newIngredient: ''})}
       {...this.props}/>
  }
}
