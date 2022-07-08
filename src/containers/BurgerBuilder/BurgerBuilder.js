import React, { Component } from "react";
import Aex from "../../hoc/Aex";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };
  render() {
    return (
      <Aex>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aex>
    );
  }
}
export default BurgerBuilder;
