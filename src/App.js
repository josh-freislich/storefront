import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers'
import Category from "./components/category/Category";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import NotFound from "./NotFound";
const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Category} />
            <Route path="/cart" component={Cart}/>
            <Route path="/product/:id" component={Product}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
