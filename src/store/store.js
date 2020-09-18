import { createStore, combineReducers } from 'redux';
import billsReducer from './reducers/bills';

const rootReducer = combineReducers({
  bills: billsReducer,
});

const store = createStore(rootReducer);

export default store;
