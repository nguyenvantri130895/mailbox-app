import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
//import { ConnectedRouter } from 'react-router-redux';
//import {createBrowserHistory as history} from 'history'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
