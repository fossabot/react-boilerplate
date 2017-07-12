import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let middleware = composeWithDevTools(applyMiddleware(thunk, createLogger()));

if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(thunk);
}

export default createStore(
  rootReducer,
  middleware,
);
