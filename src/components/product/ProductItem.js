import React from 'react';
import { Link } from 'react-router-dom';
import {formatMoney} from '../../utils'

const ProductItem = props => {
  const {count, product: { title, brand, price, description, image, color } = {}} =  props;
  const img = props.linkBack ? (
  <Link to={`/product/${title}`}>
    <img src={`/media/${image}`} alt={title}/>
  </Link>
  ) : (<img src={`/media/${image}`} alt={title}/>);

  return (
    <div className="product-item">
      {img}
      <div>
        <div className="brand">{brand}</div>
        <h1 className="name">{title} <span className="count">{count ? ' x ' + count : ''}</span></h1>
        <div className="price">${formatMoney(price)}</div>
        {color ? (<div className="color">
          <label>COLOR:</label>
          <span>{color}</span>
        </div>) : null}
        <div className="description">{description}</div>
        { props.rightChildren }
      </div>
    </div>
  )
}

export default ProductItem;
