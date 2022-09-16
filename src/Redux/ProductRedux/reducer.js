import {
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_LIST_ERROR,
  FETCH_PRODUCT_LIST_SUCCESS,
} from "./constant";

const initialState = {
  isLoading: false,
  error: "",
  productList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productList: payload,
      };
    case FETCH_PRODUCT_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
