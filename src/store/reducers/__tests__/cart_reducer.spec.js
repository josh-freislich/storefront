import React from 'react';
import * as actions from '../../actions/actions'
import reducer from '../cart_reducer';

var tests = [
  {
    description: 'Cart reducer has zero cart default state',
    inputs: [ ],
    expected: [ ]
  },
  {
    description: 'Cart reducer can add a product',
    inputs: [ ['add', {title:'a'}] ],
    expected: [ { count: 1, product: {title:'a'} } ]
  },
  {
    description: 'Cart reducer can add multiple of a single product',
    inputs: [ ['add', {title:'a'}], ['add', {title:'a'}], ['add', {title:'a'}] ],
    expected: [ { count: 3, product: {title:'a'} } ]
  },
  {
    description: 'Cart reducer can add multiple products',
    inputs: [ ['add', {title:'a'}], ['add', {title:'b'}], ['add', {title:'a'}] ],
    expected: [ { count: 2, product: {title:'a'} }, { count: 1, product: {title:'b'} } ]
  },
  {
    description: 'Cart reducer can update quantity of product',
    inputs: [ ['add', {title:'a'}], ['add', {title:'a'}], ['update', {title:'a'}, 10] ],
    expected: [ { count: 10, product: {title:'a'} } ]
  },
  {
    description: 'Cart reducer can remove a product',
    inputs: [ ['add', {title:'a'}], ['add', {title:'b'}], ['remove', {title:'a'}] ],
    expected: [ { count: 1, product: {title:'b'} } ]
  },
];

for (test of tests) {
  const {description, inputs, expected} = test;
  it(description, () => {
    let next = reducer(undefined, {});

    for (var input of inputs) {
      let [action, product, count] = input;
      switch (action) {
        case 'add':
          next = reducer(next, actions.add_to_cart(product));
          continue;
        case 'update':
          next = reducer(next, actions.update_cart(product, count));
          continue;
        case 'remove':
          next = reducer(next, actions.remove_from_cart(product));
          continue;
      }
    }
    expect(next.cart).toEqual(expected);
  });
}
