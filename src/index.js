import React from 'react';
import {
    applyMiddleware,
    createStore
} from 'redux';
import {
    BrowserRouter as Router
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/reduxStore';
ReactDOM.render(<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
