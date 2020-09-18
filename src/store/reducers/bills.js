/* eslint-disable no-case-declarations */
import { products } from '../../constants/Products';

const initialState = {
  products,
  bill: [],
};

const billsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const addedProduct = state.products.find(
        (product) => product.id === action.id
      );
      return { ...state, bill: state.bill.concat(addedProduct) };
    default:
      return state;
  }
};

export default billsReducer;
