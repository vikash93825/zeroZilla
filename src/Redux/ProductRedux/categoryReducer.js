import {
  FETCH_CATEGORY_LIST,
  FETCH_CATEGORY_LIST_ERROR,
  FETCH_CATEGORY_LIST_SUCCESS,
} from "./constant";

const initialState = {
  isLoading: false,
  error: "",
  categoryList: [],
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORY_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categoryList: payload,
      };
    case FETCH_CATEGORY_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
