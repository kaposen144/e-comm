import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from ".//Header";
import About from "./About";
import Goods from "./Goods";
import Details from "./Details";
import Cart from "./Cart";

import goods from "../products";

class App extends Component {
  state = {
    cart: []
  };
  handleAdd = item => {
    console.log(item);
    this.setState(prevState => ({
      cart: [...prevState.cart, item]
    }));
  };
  render() {
    return (
      <div className="app">
        <Header count={this.state.cart.length} />

        <hr />
        {/* на главной странице отрисовывем карточки товаров */}
        <Route exact path="/" render={() => <Goods goods={goods} />} />
        <Route
          path="/goods/:id"
          render={props => (
            <Details {...props} goods={goods} onAddToCart={this.handleAdd} />
          )}
        />
        {/* Корзина */}
        <Route
          path="/cart"
          render={props => <Cart items={this.state.cart} />}
        />
        {/* путь по которому будет доступна страница,
                компонент который будет отрисовываться тогда,
                когда пользователь переходит по этому пути
        */}
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
