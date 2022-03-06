import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./Reducers/ProductsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const combineReducer = combineReducers({ productsReducer });

const store = createStore(
  combineReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
