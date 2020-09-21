export const addProduct = (item) => ({
  type: 'ADD_PRODUCT',
  product: item,
});
export const cancelOrder = () => ({ type: 'CANCEL_ORDER' });
export const saveOrder = (items, sum, date = new Date()) => async (
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
        items,
        sum,
        date,
      }),
    }
  );
  const resData = await response.json();
  console.log(resData);
  dispatch({
    type: 'SAVE_ORDER',
    products: items,
    total: sum,
  });
};
