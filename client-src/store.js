import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable */
  const { composeWithDevTools } = require('redux-devtools-extension');
  const { createLogger } = require('redux-logger');
  /* eslint-disable */

  middleware = composeWithDevTools(applyMiddleware(thunk, createLogger()));
}

export default createStore(
  rootReducer,
  middleware,
);
