import * as ACTION_TYPES from './action_types'

export const products_loaded = (products) => {
  return {
    type: ACTION_TYPES.PRODUCTS_LOADED,
    payload: products
  }
}

export const add_to_cart = (product, count) => {
  return {
    type: ACTION_TYPES.ADD_TO_CART,
    payload: {
      product,
      count
    }
  }
}

export const update_cart = (product, count) => {
  return {
    type: ACTION_TYPES.UPDATE_CART,
    payload: {
      product,
      count
    }
  }
}

export const remove_from_cart = (product) => {
  return {
    type: ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  }
}
