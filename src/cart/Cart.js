import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect}  from 'react-redux';
import * as ACTIONS from '../store/actions/actions';
import {sumMoney, formatMoney} from '../utils'
import Nav from '../layout/Nav'
import AddToCart from './AddToCart'
import ProductItem from '../product/ProductItem'
import './Cart.css';

class Cart extends Component {
  render() {
    const {cart} = this.props;

    const productList = cart.map(item => {
      const price = item.product.price * item.count;
      const {product} = item;
      return (
        <div
          key={product.title}
          className="cart-list-item">
          <ProductItem
            key={product.title}
            product={product}
            linkBack={true}
           />
          <AddToCart
            product={product}
            count={item.count}
            updateValue={value => this.props.update_cart(product, value)}
          />
          <div className="list-item-total">${formatMoney(price)}</div>
          <div>
            <button
              onClick={ () => this.props.remove_from_cart(product) }
              className="remove-item">x</button>
          </div>
        </div>
      )
    });

    const prices = cart.map(i => i.product.price * i.count);
    const total = sumMoney(...prices);

    return (
      <div className="Cart">
        <Nav />
        <h1>Shopping Cart</h1>
        <div className="cart-list">
          <div className="cart-list-head">
            <div>PRODUCT</div>
            <div>QUANTITY</div>
            <div>TOTAL</div>
            <div>ACTION</div>
          </div>

          {productList}

          <div className="cart-subtotals">
            <div>CART OVERVIEW</div><div></div>
            <div>SUBTOTAL</div><div>${total}</div>
            <div>TOTAL</div><div className="total">${total} CAD</div>
          </div>

          <div className="cart-checkout">
            <Link to="/"><button className="continue-shopping">CONTINUE SHOPPING</button></Link>
            <button className="checkout">CHECKOUT (${total})</button>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.main.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    update_cart: (product, count) => dispatch(ACTIONS.update_cart(product, count)),
    remove_from_cart: product => dispatch(ACTIONS.remove_from_cart(product)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
