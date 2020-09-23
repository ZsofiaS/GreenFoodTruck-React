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
  Bar,
  Line,
  ComposedChart,
  Legend,
} from 'recharts';
import {
  addProduct,
  cancelOrder,
  saveOrder,
  fetchOrders,
  fetchIngredients,
  updateIngredients,
} from './store/actions/order';
import './App.scss';
import Product from './components/Product';
import Button from './components/Button';
import OrderItem from './components/OrderItem';

const App = () => {
  const availableProducts = useSelector((state) => state.order.products);
  const ingredients = useSelector((state) => state.order.ingredients);

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
        ingredients: state.order.order[key].ingredients,
      });
    }
    return addedProductsArray;
  });

  const reports = useSelector((state) => state.order.reports);

  const dispatch = useDispatch();

  const addProductHandler = (product) => {
    dispatch(addProduct(product));
    dispatch(updateIngredients(product));
  };

  const cancelOrderHandler = () => {
    dispatch(cancelOrder());
    dispatch(fetchIngredients());
  };

  const saveOrderHandler = (products, total, date, ingredients) => {
    const timeNow = moment(date, 'x').format('DD-MM-YYYY');
    saveIngredients(ingredients);
    dispatch(saveOrder(products, total, timeNow));
    dispatch(fetchOrders());
  };

  const saveIngredients = async (ingredients) => {
    await fetch('https://green-food-truck.firebaseio.com/ingredients.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients,
      }),
    });
  };

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchIngredients());
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
              saveOrderHandler(
                addedProducts,
                totalAmount,
                new Date(),
                ingredients
              )
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
          <ComposedChart
            data={reports}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical="false" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip
              formatter={(value, name) => {
                if (name === 'total') {
                  return `£${value}`;
                }
                return value;
              }}
            />
            <Legend />
            <Bar type="monotone" dataKey="total" fill="gainsboro" />
            <Line
              type="monotone"
              dataKey="croissant"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Line
              type="monotone"
              dataKey="coffee"
              fill="green"
              stroke="green"
            />
            <Line type="monotone" dataKey="choc" fill="pink" stroke="pink" />
            <Line
              type="monotone"
              dataKey="cappuccino"
              fill="darkgrey"
              stroke="darkgrey"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </section>
      <section className="App-ingredients">
        {Object.entries(ingredients).map((item) => (
          <p>
            {item[0]} {item[1]}
          </p>
        ))}
      </section>
    </div>
  );
};

export default App;
