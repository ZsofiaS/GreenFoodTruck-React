/* eslint-disable no-case-declarations */
import { products } from '../../constants/Products';
import ProductAdded from '../../models/ProductAdded';

const initialState = {
  products,
  order: {},
  totalAmount: 0,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const { product } = action;
      const productName = product.name;
      const productPrice = product.price;
      const productId = product.id;

      let productToBeAdded;

      if (state.order[productId]) {
        productToBeAdded = new ProductAdded(
          state.order[productId].quantity + 1,
          productPrice,
          productName,
          state.order[productId].sum + productPrice
        );
      } else {
        productToBeAdded = new ProductAdded(
          1,
          productPrice,
          productName,
          productPrice
        );
      }
      console.log(action.product);
      return {
        ...state,
        order: { ...state.order, [productId]: productToBeAdded },
        totalAmount: state.totalAmount + productPrice,
      };
    case 'CANCEL_ORDER':
      return { ...state, order: {}, totalAmount: 0 };
    default:
      return state;
  }
};

export default orderReducer;
