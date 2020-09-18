/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, cancelBill } from './store/actions/bill';
import './App.scss';
import Product from './components/Product.js';
import Button from './components/Button.js';

const App = () => {
  const availableProducts = useSelector((state) => state.bills.products);

  const dispatch = useDispatch();

  const addProductHandler = (id) => {
    dispatch(addProduct(id));
  };

  const cancelBillHandler = () => {
    console.log('hello');
    dispatch(cancelBill());
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
          cancelBill={() => cancelBillHandler()}
          text="Cancel"
        />
      </section>
    </div>
  );
};

export default App;
