/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from './store/actions/bill';
import './App.scss';
import Product from './components/Product.js';

const App = () => {
  const availableProducts = useSelector((state) => state.bills.products);

  const dispatch = useDispatch();

  const addProductHandler = (id) => {
    dispatch(addProduct(id));
  };

  return (
    <div className="App">
      <main className="App-main">
        {availableProducts.map((product, id) => (
          <Product
            key={id}
            name={product.name}
            price={product.price}
            img={product.img}
            addProduct={() => addProductHandler(product.id)}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
