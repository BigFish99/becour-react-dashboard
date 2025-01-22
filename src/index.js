import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './containers/App/App';

import reducers from './store'
import { createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

const client = axios.create({
	baseURL: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : '/api/serverscript/consumerdata',
	responseType: 'json'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
	reducers,
	composeEnhancers(
	applyMiddleware(
		axiosMiddleware(client)
	))
)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
