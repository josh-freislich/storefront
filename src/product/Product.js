import React, { Component } from 'react';
import {connect}  from 'react-redux';
import * as ACTIONS from '../store/actions/actions';
import Nav from '../layout/Nav'
import Breadcrumbs from '../layout/Breadcrumbs'
import AddToCart from '../cart/AddToCart'
import ProductItem from './ProductItem'
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id
        };
    }

    render() {
      const {id} = this.state;
      const crumbs = [
        {href:'/',text:'Home'},
        {href:'/',text:'Plates'},
        {text:this.state.id}]
      const product = this.props.products.find(p => p.title === id);

      return (
        <div className="Product">
          <Nav />
          <Breadcrumbs crumbs={crumbs}/>
          <ProductItem
            product={product}
            rightChildren={<AddToCart
              product={product}
              setValue={value => this.props.add_to_cart(product, value)}
             />}/>
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
    add_to_cart: (product, value) => dispatch(ACTIONS.add_to_cart(product, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
