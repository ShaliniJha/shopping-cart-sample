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
        case ADD_ITEM_TO_CART:
            let cartCount = store.getState().cartCount;
            return ++cartCount;
        case REMOVE_ITEM_FROM_CART:
            cartCount = store.getState().cartCount;
            return --cartCount;
        case REMOVE_ALL_ITEMS:
            return 0;

        default:
        return state;
    }
}

const cartData = (state = [], action) => {
    switch (action.type) {
        case  ADD_ITEM_TO_CART:{
            state.push(action.item);
            return state;
        }

        case REMOVE_ITEM_FROM_CART:{
            let newArray  = state.filter( (item) => {
                return item.name !== action.name
            });

            return newArray
        }

        case REMOVE_ALL_ITEMS:
            return [];
        
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