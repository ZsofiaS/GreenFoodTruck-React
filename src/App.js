/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import {
  addProduct,
  cancelOrder,
  saveOrder,
  fetchOrders,
} from './store/actions/order';
import './App.scss';
import Product from './components/Product';
import Button from './components/Button';
import OrderItem from './components/OrderItem';
import DailyReport from './models/DailyReport';

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
  const reports = useSelector((state) => state.order.reports);

  const dispatch = useDispatch();

  const addProductHandler = (product) => {
    dispatch(addProduct(product));
  };

  const cancelOrderHandler = () => {
    dispatch(cancelOrder());
  };

  const saveOrderHandler = (products, total, date) => {
    const timeNow = moment(date, 'x').format('DD-MM-YYYY');
    dispatch(saveOrder(products, total, timeNow));
    dispatch(fetchOrders());
  };

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

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
            actionOrder={() => cancelOrderHandler()}
            text="Cancel"
          />
          <Button
            role="button"
            tabIndex={0}
            className="button"
            actionOrder={() =>
              saveOrderHandler(addedProducts, totalAmount, new Date())
            }
            text="Pay"
          />
        </div>
      </section>
      <section className="App-orders">
        <p>Orders:</p>
        {/* {orders.map((order, i) => (
          <div key={i}>
            <p>£{order.total}</p>
            <p>{order.date}</p>
          </div>
        ))} */}
        {/* {reports.map((report, i) => (
          <div key={i}>
            {Object.keys(report).map((key) => (
              <div key={key}>
                <p>
                  {key} £{report[key]}
                </p>
              </div>
            ))}
          </div>
        ))} */}
      </section>
      <section className="App-chart">
        <ResponsiveContainer width="95%" height={250}>
          <BarChart
            data={reports}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical="false" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip formatter={(value) => `£${value}`} />
            <Bar type="monotone" dataKey="total" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default App;
