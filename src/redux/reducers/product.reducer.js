/* eslint-disable default-case */
import * as types from '../types';

const init_state = {
  product_list: null,
  product_list_loading: true,

  product_search: null,
  product_search_loading: true,

  announcement_close_list: null,
  announcement_close_list_loading: false,

  announcements_create: null,
  announcements_create_loading: null,
};

const productReducer = (state = init_state, action) => {
  switch (action.type) {
    // ---- ANNOUNCEMENTS LIST-------
    case types.PRODUCT_LISTING_START: {
      return {
        ...state,
        product_list_loading: true,
        product_list: null,
        error: false,
        error_msg: '',
      };
    }
    case types.PRODUCT_LISTING_SUCCESS: {
      // console.log('response: ====>', action.payload.data, state);
      return {
        ...state,
        product_list_loading: false,
        product_list: action.payload.data,
        error: false,
      };
    }
    case types.PRODUCT_LISTING_FAIL: {
      return {
        ...state,
        product_list_loading: false,
        product_list: null,
        error: true,
        error_msg: action.payload,
      };
    }

    // Search for products
    case types.PRODUCT_SEARCH_START: {
      return {
        ...state,
        product_search_loading: true,
        product_search: null,
        error: false,
        error_msg: '',
      };
    }
    case types.PRODUCT_SEARCH_SUCCESS: {
      console.log('response: ====>', action.payload.data);
      return {
        ...state,
        product_search_loading: false,
        product_search: action.payload.data,
        error: false,
      };
    }
    case types.PRODUCT_SEARCH_FAIL: {
      return {
        ...state,
        product_search_loading: false,
        product_search: null,
        error: true,
        error_msg: action.payload,
      };
    }
  }
  return state;
};

export default productReducer;
