import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { getAllProductsReducer, getProductByIdReducer } from './reducers/productReducer';
import { addToCartReducer } from './reducers/cartReducer';

const finalReducer = combineReducers({
  getAllProductsReducer,
  getProductByIdReducer,
  addToCartReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  addToCartReducer : {cartItems : cartItems}
}

const middleware = [thunk];

const store = createStore(finalReducer,initialState, applyMiddleware(...middleware));

export default store;
