import React, { useState } from 'react';
import {connect}  from 'react-redux';
import * as ACTIONS from '../store/actions/actions';
import { Link } from 'react-router-dom';
import CartMenu from '../cart/CartMenu';
import './Header.css';

const Header = (props) => {
  const [open, setOpen] = useState(false);

  const {cart, empty, remove_from_cart} = props;
  const cartTotal = cart.reduce((sum,item) => {
    return parseInt(sum) + parseInt(item.count)
  }, 0);

  return (
    <header className="header">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/" className="expandable">Shop</Link>
        <Link to="/">Journal</Link>
        <Link to="/" className="expandable">More</Link>
        <button
          className="show-cart-menu"
          onClick={() => setOpen(!open)}
        >My Cart {cartTotal ? `(${cartTotal})` : null}</button>
        <CartMenu
          open={open}
          empty={empty}
          cart={cart}
          remove={product => remove_from_cart(product)}
          />
      </div>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.main.cart,
    empty: !state.main.cart.length
  }
}

function mapDispatchToProps(dispatch) {
  return {
    remove_from_cart: product => dispatch(ACTIONS.remove_from_cart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
