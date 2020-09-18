import { createStore, combineReducers } from 'redux';
import billsReducer from './reducers/bill';

const rootReducer = combineReducers({
  bills: billsReducer,
});

const store = createStore(rootReducer);

export default store;
