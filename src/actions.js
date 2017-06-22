import axios from 'axios';
import {BASEURL} from './constants';
/**
 * Action Types
 */

 export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
 export const UPDATE_ITEM_TO_CART = "UPDATE_ITEM_TO_CART";
 export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
 export const REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS";
 export const FETCH_PRODUCT_LIST = "FETCH_PRODUCT_LIST";
 export const UPDATE_GW_DATA = "UPDATE_GW_DATA";
 export const UPDATE_CART_DATA = "UPDATE_CART_DATA";

  export const removeItemFromCart = (dispatch, id) =>() => {
    axios.delete(BASEURL+"cart/delete/"+id)
    .then((response) => {
      dispatch(fetchCartList(dispatch));
    })    
  }


  export const removeAllItems = (dispatch) => () => {
      axios.delete(BASEURL+'cart/clear')
      .then((response) => {
            dispatch(fetchCartList(dispatch));
      });
  }

  export const fetchProductList  = (dispatch) =>() => {
    axios.get(BASEURL+"products")
    .then((response) => {
      dispatch(updateGWData(response.data.gwData));
    });
  }


  const updateGWData = (newData) =>{
      return {type: UPDATE_GW_DATA, newData};
  }

  export const addItemToCart = (dispatch, payload) =>() => {
    axios.post(BASEURL+"cart/add", payload)
    .then((response) => {
      dispatch(fetchCartList(dispatch));
    })    
  }

  export const fetchCartList = (dispatch) => () =>{
    axios.get(BASEURL+"cart")
    .then((response) => {
      dispatch(updateCartData(response.data.cartData));
    });
  }

  const updateCartData = (cartData) => {
    return {type: UPDATE_CART_DATA, cartData}
  }
  