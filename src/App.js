/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, cancelOrder } from './store/actions/order';
import './App.scss';
import Product from './components/Product';
import Button from './components/Button';
import OrderItem from './components/OrderItem';

const App = () => {
  const availableProducts = useSelector((state) => state.order.products);

  const totalAmount = useSelector((state) => state.order.totalAmount);
  const addedProducts = useSelector((state) => {
    const addedProductsArray = [];
    for (const key in state.order.order) {
      addedProductsArray.push({
        productId: key,
        productName: state.order.order[key].name,
        productPrice: state.order.order[key].price,
        quantity: state.order.order[key].quantity,
        sum: state.order.order[key].sum,
      });
    }
    return addedProductsArray;
  });
  const dispatch = useDispatch();

  const addProductHandler = (product) => {
    dispatch(addProduct(product));
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
            addProduct={() => addProductHandler(product)}
          />
        ))}
      </section>
      <section className="App-checkout">
        <p>Order:</p>
        {addedProducts.map((product, id) => (
          <OrderItem
            key={product.productId}
            name={product.productName}
            price={product.productPrice}
            quantity={product.quantity}
            sum={product.sum}
          />
        ))}
        <p>Total: £{totalAmount}</p>
        <div className="button-container">
          <Button
            role="button"
            tabIndex={0}
            className="button"
            cancelOrder={() => cancelOrderHandler()}
            text="Cancel"
          />
        </div>
      </section>
    </div>
  );
};

export default App;
