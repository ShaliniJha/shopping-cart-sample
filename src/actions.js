import axios from 'axios';
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

  export const removeItemFromCart = (itemName) => {
      return {type: REMOVE_ITEM_FROM_CART, name:itemName};
  }

  export const removeAllItems = () => {
      return {type: REMOVE_ALL_ITEMS};
  }

  export const fetchProductList  = (dispatch) =>() => {
    axios.get("http://localhost:3000/products")
    .then((response) => {
      console.log(response);
      dispatch(updateGWData(response.data.gwData));
    });
  }


  const updateGWData = (newData) =>{
      return {type: UPDATE_GW_DATA, newData};
  }

  export const addItemToCart = (dispatch, payload) =>() => {
    axios.post("http://localhost:3000/cart/add", payload)
    .then((response) => {
      console.log(response);
      dispatch(fetchCartList(dispatch));
    })    
  }

  export const fetchCartList = (dispatch) => () =>{
    axios.get("http://localhost:3000/cart")
    .then((response) => {
      console.log(response);
      dispatch(updateCartData(response.data.cartData));
    });
  }

  const updateCartData = (cartData) => {
    return {type: UPDATE_CART_DATA, cartData}
  }
  