import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {sumMoney, formatMoney} from '../../utils'
import ProductItem from '../product/ProductItem'

class CartMenu extends Component {
  render() {
    const {cart = [], open, empty, remove} = this.props;

    const cartStyles = [
      'cart-menu',
      empty ? 'cart-empty' : '',
      open ? 'open' : ''
    ].join(' ');

    const productList = cart.map(item => item.count ? (
      <ProductItem
        key={item.product.title}
        product={item.product}
        count={item.count}
        rightChildren={<button
          onClick={ () => remove(item.product) }
          className="remove-item">x</button>}
        />
    ) : null);

    const prices = cart.map(i => i.product.price * i.count);
    const total = sumMoney(...prices);

    return (
      <div className={cartStyles}>
        <div className="empty-menu-list">
          <div className="empty">Your cart is empty</div>
          <div className="ideas">Looking for ideas?</div>
          <Link to="/"><button className="secondary">See trending items</button></Link>
        </div>

        <div className="menu-list">
          {productList}
        </div>

        <div className="cart-menu-total">
          <span className="cart-menu-total-description">TOTAL</span>
          <span className="cart-menu-total-amount">${formatMoney(total)}</span>
        </div>

        <div className="cart-menu-buttons">
          <Link to="/cart"><button className="view-cart">VIEW CART</button></Link>
          <button className="checkout">CHECKOUT</button>
        </div>
      </div>
    );
  }
}

export default CartMenu;
