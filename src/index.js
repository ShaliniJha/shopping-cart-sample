import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


import App from './App';
import CartContainer from './CartContainer';

import store from './reducers';

import './index.css';





const history = createBrowserHistory();

ReactDOM.render(
    /** Provider is used to pass the store object through the varios components in teh app */
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path='/gridwall' component={App}/>
                <Route path='/cart' component={CartContainer}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
