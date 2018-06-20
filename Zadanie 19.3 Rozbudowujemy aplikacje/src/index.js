import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

import {Provider} from 'react-redux';
import {addComment} from './actions.js';
import {createStore, combineReducers} from 'redux';
import DevTools from './DevTools.js';
import reducer from './reducer.js';

const store = createStore(reducer, DevTools.instrument());

ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('Pierwszy komentarz!'));
store.dispatch(addComment('Kolejny komentarz!'));
store.dispatch(addComment('I jeszcze jeden! :)'));