/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Product from './components/Product.js';

const App = () => {
  const availableProducts = useSelector((state) => state.bills.products);

  return (
    <div className="App">
      <main className="App-main">
        {availableProducts.map((product, id) => (
          <Product
            key={id}
            name={product.name}
            price={product.price}
            img={product.img}
            printProduct={() => console.log(product.name)}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
