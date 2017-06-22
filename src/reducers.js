import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import gridwallData from './resources/cart.json';
import { 
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    REMOVE_ALL_ITEMS,
    UPDATE_GW_DATA,
    UPDATE_CART_DATA
 } from './actions';


const gwData = (state = [],action) => {
    switch(action.type)
    {   
        case UPDATE_GW_DATA:
            return action.newData;
        default:
            return state;

    }
} 


const cartCount = (state = 0,action) => {
    switch(action.type){
        case UPDATE_CART_DATA :
            return action.cartData.length;
        default:
            return state;
    }
}

const cartData = (state = [], action) => {
    switch (action.type) {
        case UPDATE_CART_DATA :
            return action.cartData;
        default:
            return state;
    }
}

const appData = combineReducers({
    gwData,
    cartCount,
    cartData

})

const middleware = applyMiddleware(thunk);

let store = createStore(appData, gridwallData,middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;