import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import reducers from './store'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

const client = axios.create({
	baseURL: '/',
	responseType: 'json'
});

let store = createStore(
	reducers,
	applyMiddleware(
		axiosMiddleware(client)
	)
)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
