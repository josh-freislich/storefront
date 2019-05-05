import React from 'react';
import CartMenu from '../CartMenu';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

const products = {
  kiriko: {
    "title": "Blue Stripe Stoneware Plate",
    "brand": "Kiriko",
    "price": 40,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    "image": "blue-stripe-stoneware-plate.jpg",
    "color": ""
  },
  heme :   {
    "title": "Heme",
    "brand": "Dust & Form",
    "price": 52,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
    "image": "heme.jpg",
    "color": ""
  }
}

it('<CartMenu /> renders correctly when default closed state', () => {
  const wrapper = shallow(
    <CartMenu />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('<CartMenu /> renders correctly when open state', () => {
  const wrapper = shallow(
    <CartMenu
      open={true}
      empty={true}
    />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('<CartMenu /> renders correctly when has products', () => {
  const cart = [ { count: 2, product: products.kiriko }, { count: 1, product: products.heme } ]
  const wrapper = shallow(
    <CartMenu
      open={true}
      cart={cart}
    />

  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
