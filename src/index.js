import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import gridwallData from './resources/cart.json';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore,combineReducers,} from 'redux';

import { Provider } from 'react-redux'

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
        default:
        return state;
    }
}

const cartData = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const appData = combineReducers({
    gwData,
    cartCount,
    cartData

})

let store = createStore( appData,gridwallData,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
 /** Provider is used to pass the store object through the varios components in teh app */
 <Provider store={store}><AppContainer />
 </Provider>,
  document.getElementById('root'));
registerServiceWorker();
