import React, { Component } from 'react';
import {connect}  from 'react-redux';
import { Link } from 'react-router-dom';
import * as ACTIONS from '../store/actions/actions';
import Header from '../layout/Header';
import ProductItem from '../product/ProductItem';
import './Category.css';

class Category extends Component {

  componentDidMount() {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => this.props.products_loaded(data));
  }

  render() {
    const {products, add_to_cart} = this.props;

    const productItemList = products.map((p, index) => {
      const rightChildren = [
        (<Link to={`/product/${p.title}`}
          key={`view-${index}`}>
          <button className="view">VIEW DETAILS</button>
        </Link>),
        (<button className="add"
          onClick={() => add_to_cart(p)}
          key={`add-${index}`}>ADD TO CART</button>)
      ];

      return (
        <ProductItem
          key={p.title}
          product={p}
          rightChildren={rightChildren} />
      )
    });

    return (
        <div>
          <Header />
          <div className="Category">
            {productItemList}
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.main.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add_to_cart: product => dispatch(ACTIONS.add_to_cart(product)),
    products_loaded: products => dispatch(ACTIONS.products_loaded(products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
