import {
    FETCH_PRODUCT_ITEM,
    FETCH_PRODUCT_ITEM_FAILURE,
    FETCH_PRODUCT_ITEM_SUCCESS,
  } from "./constant";
  
  const initialState = {
    isLoading: false,
    error: "",
    item: {},
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
     
      case FETCH_PRODUCT_ITEM:
        return {
  
          isLoading: true,
        };
  
      case FETCH_PRODUCT_ITEM_SUCCESS:
      
        return {
       
          isLoading: false,
          item: {...payload},
        };
      case FETCH_PRODUCT_ITEM_FAILURE:
        return {
    
          isLoading: false,
          error: payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  