import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { firebaseReducer } from 'react-redux-firebase';
import orderReducer from './reducers/order';
import authReducer from './reducers/auth';

// import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
  order: orderReducer,
  firebase: firebaseReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
