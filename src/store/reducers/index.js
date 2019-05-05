
import MainReducer from './cart_reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  main: MainReducer,
})

export default rootReducer;
