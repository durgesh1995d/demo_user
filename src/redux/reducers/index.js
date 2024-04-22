import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import productReducer from './product.reducer';

const combinedReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
