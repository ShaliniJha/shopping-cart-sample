import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers,} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import AppContainer from './AppContainer';
import CartContainer from './CartContainer';
import gridwallData from './resources/cart.json';
import { 
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    REMOVE_ALL_ITEMS,
    INCREASE_CART_COUNT,
    DECREASE_CART_COUNT,
 } from './actions'
import './index.css';


/**reducer */
const gwData = (state = [],action) => {
    switch(action.type)
    {
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
    /*You dont have to get cartData from the state each time,
    *this reducer acts on the cartData part alone so you can  reference the array  directly.
    * i.e  let cartList = store.getState().cartData;
    *      cartList.push(action.item);
    *
    * can be simplified as state.push(action.item)
    *
    * Also , each time a new instance has to be returned !
    * */
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
        default:
            return state;
    }
}

const appData = combineReducers({
    gwData,
    cartCount,
    cartData

})

let store = createStore(appData, gridwallData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = createBrowserHistory();

ReactDOM.render(
    /** Provider is used to pass the store object through the varios components in teh app */
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path='/gridwall' component={AppContainer}/>
                <Route path='/cart' component={CartContainer}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
