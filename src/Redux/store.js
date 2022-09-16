import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer from "./ProductRedux/reducer";
import itemReducer from "./ProductRedux/itemReducer";
import categoryReducer from "./ProductRedux/categoryReducer";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  categoryData: categoryReducer,
  productData: reducer,
  productItem: itemReducer,
});
const store = createStore(rootReducers, createComposer(applyMiddleware(thunk)));

export default store;
