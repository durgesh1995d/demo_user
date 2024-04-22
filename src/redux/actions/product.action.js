import * as types from '../types';
import axios from 'axios';

export const productListingAction = () => {
  return dispatch => {
    dispatch({
      type: types.PRODUCT_LISTING_START,
      payload: null,
    });
    axios
      .get('https://dummyjson.com/products')
      .then(res => {
        if (res.status == 200) {
          dispatch({
            type: types.PRODUCT_LISTING_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: types.PRODUCT_LISTING_FAIL,
            payload: res,
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const productSearchAction = data => {
  console.log('paraams==', data);
  return dispatch => {
    dispatch({
      type: types.PRODUCT_SEARCH_START,
      payload: null,
    });
    axios
      .get('https://dummyjson.com/products/search?q=' + data)
      .then(res => {
        // console.log('Searching Data===>', res);
        if (res.status == 200) {
          dispatch({
            type: types.PRODUCT_SEARCH_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: types.PRODUCT_SEARCH_FAIL,
            payload: res,
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
};
