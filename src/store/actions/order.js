export const addProduct = (item) => ({
  type: 'ADD_PRODUCT',
  product: item,
});
export const cancelOrder = () => ({ type: 'CANCEL_ORDER' });
export const saveOrder = (items, sum) => ({
  type: 'SAVE_ORDER',
  products: items,
  total: sum,
});
