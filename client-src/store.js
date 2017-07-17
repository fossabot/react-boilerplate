import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

function configureStore(initialState) {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable */
    const { composeWithDevTools } = require('redux-devtools-extension');
    const { createLogger } = require('redux-logger');
    /* eslint-disable */

    const middlewares = [
      createLogger(),
      thunk,
    ];

    const store = createStore(rootReducer, initialState, compose(
      composeWithDevTools(applyMiddleware(...middlewares)),
    ));

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index');
        store.replaceReducer(nextRootReducer);
      });
    }
    return store;
  } else {
    const middlewares = [
      thunk,
    ];

    return createStore(rootReducer, compose(
      applyMiddleware(...middlewares),
    ));
  }
}

export default store = configureStore();
