/* eslint-disable no-case-declarations */
import { products } from '../../constants/Products';
import ProductAdded from '../../models/ProductAdded';
import OrderAdded from '../../models/OrderAdded';

const initialState = {
  ingredients: {},
  products,
  order: {},
  totalAmount: 0,
  orders: [],
  reports: [],
  user: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const { product } = action;
      const productName = product.name;
      const productPrice = product.price;
      const productId = product.id;
      const { ingredients } = product;

      let productToBeAdded;

      if (state.order[productId]) {
        productToBeAdded = new ProductAdded(
          state.order[productId].quantity + 1,
          productPrice,
          productName,
          state.order[productId].sum + productPrice,
          ingredients
        );
      } else {
        productToBeAdded = new ProductAdded(
          1,
          productPrice,
          productName,
          productPrice,
          ingredients
        );
      }
      return {
        ...state,
        order: { ...state.order, [productId]: productToBeAdded },
        totalAmount: state.totalAmount + productPrice,
      };
    case 'CANCEL_ORDER':
      return { ...state, order: {}, totalAmount: 0 };
    case 'SAVE_ORDER':
      const orderId = action.id;
      const currentOrder = action.products;
      const { total } = action;
      const { date } = action;
      const orderToBeAdded = new OrderAdded(orderId, currentOrder, total, date);
      return {
        ...state,
        order: {},
        totalAmount: 0,
        orders: [...state.orders, orderToBeAdded],
      };
    case 'SET_ORDERS':
      return {
        ...state,
        orders: action.orders,
        reports: action.reports,
      };
    case 'GET_INGREDIENTS':
      return {
        ...state,
        ingredients: action.ingredients,
      };
    case 'UPDATE_INGREDIENTS':
      const { item } = action;
      console.log(state.ingredients);
      const stateIngredients = state.ingredients;
      const newIngredients = {};
      Object.entries(item.ingredients).map((ing) => {
        // eslint-disable-next-line prefer-destructuring
        newIngredients[ing[0]] = ing[1];
        return true;
      });
      Object.entries(newIngredients).map((ing) => {
        stateIngredients[ing[0]] -= ing[1];
        return true;
      });
      return {
        ...state,
        ingredients: stateIngredients,
      };
    case 'SAVE_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default orderReducer;
