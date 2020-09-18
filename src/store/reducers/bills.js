import { products } from '../../constants/Products';

const initialState = {
  products,
  bill: [],
};

const billsReducer = (state = initialState, action) => state;

export default billsReducer;
