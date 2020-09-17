/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import './App.scss';
import Product from './components/Product.js';
import { products } from './constants/Products.js';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        {products.map((product, id) => (
          <Product
            key={id}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
