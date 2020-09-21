/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import OrderAdded from '../../models/OrderAdded';

export const addProduct = (item) => ({
  type: 'ADD_PRODUCT',
  product: item,
});
export const cancelOrder = () => ({ type: 'CANCEL_ORDER' });
export const fetchOrders = () => async (dispatch) => {
  const response = await fetch(
    'https://green-food-truck.firebaseio.com/orders.json'
  );

  const resData = await response.json();
  console.log(resData);
  const loadedOrders = [];
  for (const key in resData) {
    loadedOrders.push(
      new OrderAdded(
        key,
        resData[key].products,
        resData[key].total,
        resData[key].date
      )
    );
  }
  const groupedOrders = loadedOrders.reduce((r, a) => {
    r[a.date] = r[a.date] || [];
    r[a.date].push(a);
    return r;
  }, Object.create(null));
  const dailyReports = [];
  for (const [date, orders] of Object.entries(groupedOrders)) {
    let total = 0;
    orders.forEach((order) => {
      total += order.total;
    });
    // console.log(`Date: ${date}, total: ${total}`);
    dailyReports.push({ [date]: total });
  }
  dispatch({ type: 'SET_ORDERS', orders: loadedOrders, reports: dailyReports });
};
export const saveOrder = (products, total, date = new Date()) => async (
  dispatch
) => {
  const response = await fetch(
    'https://green-food-truck.firebaseio.com/orders.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        products,
        total,
        date,
      }),
    }
  );
  const resData = await response.json();
  dispatch({
    type: 'SAVE_ORDER',
    products,
    total,
    date,
    id: resData.name,
  });
};
