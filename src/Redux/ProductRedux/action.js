import axios from "axios";
import {
  FETCH_CATEGORY_LIST,
  FETCH_CATEGORY_LIST_ERROR,
  FETCH_CATEGORY_LIST_SUCCESS,
  FETCH_PRODUCT_ITEM,
  FETCH_PRODUCT_ITEM_FAILURE,
  FETCH_PRODUCT_ITEM_SUCCESS,
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_LIST_ERROR,
  FETCH_PRODUCT_LIST_SUCCESS,
} from "./constant";

export const fetchCategoryRequest = () => {
  return {
    type: FETCH_CATEGORY_LIST,
  };
};

export const fetchCategorySuccess = (payload) => {
  return {
    type: FETCH_CATEGORY_LIST_SUCCESS,
    payload,
  };
};

export const fetchCategoryFailure = (error) => {
  return {
    type: FETCH_CATEGORY_LIST_ERROR,
    error,
  };
};

export const fetchCategoryData = () => (dispatch) => {
  dispatch(fetchCategoryRequest());

  return axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => {
      console.log("response success", res);
      dispatch(fetchCategorySuccess(res.data));
    })
    .catch((err) => dispatch(fetchCategoryFailure(err)));
};

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_LIST,
  };
};

export const fetchProductSuccess = (payload) => {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    payload,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_LIST_ERROR,
    error,
  };
};

export const fetchProductData = (query) => (dispatch) => {
  dispatch(fetchProductRequest());

  return axios
    .get(`https://fakestoreapi.com/products/category/${query}`)
    .then((res) => {
      dispatch(fetchProductSuccess(res.data));
    })
    .catch((err) => dispatch(fetchProductFailure(err)));
};

export const fetchProductItem = () => {
  return {
    type: FETCH_PRODUCT_ITEM,
  };
};

export const fetchProductItemSuccess = (payload) => {
  return {
    type: FETCH_PRODUCT_ITEM_SUCCESS,
    payload,
  };
};

export const fetchProductItemFailure = (error) => {
  return {
    type: FETCH_PRODUCT_ITEM_FAILURE,
    error,
  };
};

export const fetchProductItemData = (id) => (dispatch) => {
  dispatch(fetchProductItem());

  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      // console.log("respo", res);
      dispatch(fetchProductItemSuccess(res.data));
    })
    .catch((err) => dispatch(fetchProductItemFailure(err)));
};
