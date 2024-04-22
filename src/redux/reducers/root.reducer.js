import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import productReducer from './product.reducer';

const root = combineReducers({
  userReducer,
  productReducer,
});

export default root;
