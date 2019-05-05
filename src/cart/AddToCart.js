import React, {useState} from 'react';
import './AddToCart.css';

const AddToCart = props => {
  const [value, setValue] = useState(props.count || 1)

  const incrementValue = () => {
    setValue(value + 1)
    props.updateValue && props.updateValue(value + 1)
  }

  const decrementValue = () => {
    if (value > 0) {
      setValue(value - 1)
      props.updateValue && props.updateValue(value - 1)
    }
  }

  const updateValue = evt => {
    let val = evt.target.value;
    val = val ? +val.match(/\d+/gi).join('') : 0;
    setValue(val);
    props.updateValue && props.updateValue(val);
  }

  return (
    <div className="add-to-cart">
      <input value={value} onChange={updateValue} type="text" />
      <div><button onClick={() => incrementValue()}>+</button></div>
      <div><button onClick={() => decrementValue()}>-</button></div>
      <button className="add" onClick={() => props.setValue(value)}>ADD TO CART</button>
    </div>
  )
}

export default AddToCart;
