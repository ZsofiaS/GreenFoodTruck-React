/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import OrderAdded from '../../models/OrderAdded';

export const addProduct = (item) => ({
  type: 'ADD_PRODUCT',
  product: item,
});
export const cancelOrder = () => ({ type: 'CANCEL_ORDER' });
export const fetchIngredients = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_INGREDIENTS_URL);
  const resData = await response.json();
  dispatch({ type: 'GET_INGREDIENTS', ingredients: resData.ingredients });
};
export const fetchOrders = () => async (dispatch) => {
  const response = await fetch(
    'https://green-food-truck.firebaseio.com/orders.json'
  );

  const resData = await response.json();
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
    let croissant = 0;
    let coffee = 0;
    let choc = 0;
    let cappuccino = 0;
    orders.forEach((order) => {
      order.products.forEach((product) => {
        switch (product.productName) {
          case 'Croissant' || 'croissant':
            croissant += product.quantity;
            break;
          case 'Coffee' || 'coffee':
            coffee += product.quantity;
            break;
          case 'Pain au chocolat' || 'choc':
            choc += product.quantity;
            break;
          case 'Cappuccino' || 'cappuccino':
            cappuccino += product.quantity;
            break;
          default:
            break;
        }
      });
      total += order.total;
    });
    dailyReports.push({
      date,
      total,
      croissant,
      coffee,
      choc,
      cappuccino,
    });
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
export const updateIngredients = (product) => ({
  type: 'UPDATE_INGREDIENTS',
  item: product,
});
export const saveUser = (user) => ({
  type: 'SAVE_USER',
  user,
});
