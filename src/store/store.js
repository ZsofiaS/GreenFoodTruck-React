import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import orderReducer from './reducers/order';

const rootReducer = combineReducers({
  order: orderReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
