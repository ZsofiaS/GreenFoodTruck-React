/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router';
import {
  addProduct,
  cancelOrder,
  saveOrder,
  fetchOrders,
  fetchIngredients,
  updateIngredients,
} from '../store/actions/order';
import '../styles/Home.scss';
import Product from './Product';
import Button from './Button';
import OrderItem from './OrderItem';
import { auth } from '../firebase/firebaseConfig';

const enhance = connect(
  // Map redux state to component props
  ({ firebase: { auth, profile } }) => ({
    auth,
    profile,
  })
);

const Home = () => {
  const [user, setUser] = useState(null);
  const availableProducts = useSelector((state) => state.order.products);
  const ingredients = useSelector((state) => state.order.ingredients);
  const currentUser = useSelector((state) => state.firebase.auth);

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
    console.log(auth.currentUser);
    dispatch(saveOrder(products, total, timeNow));
    dispatch(fetchOrders());
  };

  const saveIngredients = async (ingredients) => {
    await fetch(process.env.REACT_APP_INGREDIENTS_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients,
      }),
    });
  };

  const history = useHistory();

  useEffect(() => {
    console.log(user);
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push('/');
        console.log('no user');
      } else {
        setUser(user);
        console.log(user.email);
      }
    });
    dispatch(fetchOrders());
    dispatch(fetchIngredients());
  }, [dispatch, history]);

  return (
    <>
      <div className="Home">
        <section className="Home-input">
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

        <section className="Home-checkout">
          <h1>Current Sale</h1>
          <div className="Home-checkout-container">
            <div className="breakdown-container">
              {addedProducts.map((product, id) => (
                <OrderItem
                  key={product.productId}
                  name={product.productName}
                  price={product.productPrice}
                  quantity={product.quantity}
                  sum={product.sum}
                />
              ))}
              <p className="total">Total: £{totalAmount}</p>
            </div>
            {addedProducts.length !== 0 && (
              <div className="button-container">
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
                <Button
                  role="button"
                  tabIndex={0}
                  className="button"
                  actionOrder={() => cancelOrderHandler()}
                  text="Cancel"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default enhance(Home);
