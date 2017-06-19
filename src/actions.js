/**
 * Action Types
 */

 export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
 export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
 export const REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS";

 /**
  * Action Creators
  */
  export const addItemToCart = (item) => {
    return {type: ADD_ITEM_TO_CART, item};
  }

  export const removeItemFromCart = (itemName) => {
      return {type: REMOVE_ITEM_FROM_CART, name:itemName};
  }