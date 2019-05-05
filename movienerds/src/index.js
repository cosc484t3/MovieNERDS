import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer';
import './index.css';
import App from './components/common/App'
import * as serviceWorker from './serviceWorker';

export const MOVIE_NERDS_API_URL = 'http://localhost:5000'

// const middleware = [logger, thunk]
const middleware = [thunk]
const store = createStore(
  rootReducer, 
  {}, 
  composeWithDevTools(applyMiddleware(...middleware)))

render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

