export const addProduct = (item) => ({
  type: 'ADD_PRODUCT',
  product: item,
});
export const cancelOrder = () => ({ type: 'CANCEL_ORDER' });
