import * as ACTION_TYPES from '../actions/action_types'

// TODO: load from endpoint;
const initialState = {
  products: [],
  cart: [],
}

const Reducer = (state = initialState, action) => {
  let product, cart, found, count;
  switch(action.type) {
    case ACTION_TYPES.PRODUCTS_LOADED:
      const products = action.payload;
      return {
        ...state,
        products: [...products]
      }

    case ACTION_TYPES.ADD_TO_CART:
      product = action.payload.product;
      count = action.payload.count || 1;
      cart = [...state.cart];

      // Note: should find on a key, not text..
      found = cart.find((item) => item.product.title === product.title);
      found ? found.count += count : cart.push({
        count,
        product
      });

      return {
        ...state,
        cart
      }

    case ACTION_TYPES.UPDATE_CART:
      product = action.payload.product;
      count = action.payload.count;
      cart = [...state.cart];

      // Note: should find on a key, not text..
      found = cart.find((item) => item.product.title === product.title);
      if (found) {
        found.count = count;
      }

      return {
        ...state,
        cart
      }

    case ACTION_TYPES.REMOVE_FROM_CART:
      product = action.payload;
      cart = [...state.cart];

      // Note: should find on a key, not text..
      const filtered = cart.filter((item) => item.product.title !== product.title);

      return {
        ...state,
        cart: [...filtered]
      }

    default:
      return state
  }
}

export default Reducer;
