/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import './App.scss';
import Product from './components/Product.js';
import { products } from './constants/Products.js';

const App = () => (
  <div className="App">
    <main className="App-main">
      {products.map((product, id) => (
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

export default App;
