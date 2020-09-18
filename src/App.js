/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, cancelOrder } from './store/actions/order';
import './App.scss';
import Product from './components/Product.js';
import Button from './components/Button.js';

const App = () => {
  const availableProducts = useSelector((state) => state.order.products);

  const dispatch = useDispatch();

  const addProductHandler = (id) => {
    dispatch(addProduct(id));
  };

  const cancelOrderHandler = () => {
    console.log('hello');
    dispatch(cancelOrder());
  };

  return (
    <div className="App">
      <section className="App-input">
        {availableProducts.map((product, id) => (
          <Product
            key={id}
            name={product.name}
            price={product.price}
            img={product.img}
            addProduct={() => addProductHandler(product.id)}
          />
        ))}
      </section>
      <section className="App-checkout">
        <Button
          role="button"
          tabIndex={0}
          className="button"
          cancelOrder={() => cancelOrderHandler()}
          text="Cancel"
        />
      </section>
    </div>
  );
};

export default App;
