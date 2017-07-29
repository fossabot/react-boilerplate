import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import store from './store';
import App from './app';

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable */
  let createClass = React.createClass;
  Object.defineProperty(React, 'createClass', {
    set: (nextCreateClass) => {
      createClass = nextCreateClass;
    },
  });
  const { whyDidYouUpdate } = require('why-did-you-update');
  /* eslint-disable */

  whyDidYouUpdate(React);
}

// render app
const rootEl = document.getElementById('root');
const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl,
  );
};

renderApp(App);
if (module.hot) module.hot.accept(() => renderApp(App));

// offline-plugin
OfflinePluginRuntime.install({
  onUpdating: () => {
    console.log('SW Event:', 'onUpdating');
  },
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady');
    // Tells to new SW to take control immediately
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated');
    // Reload the webpage to load into the new version
    window.location.reload();
  },
  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed');
  },
});

if (process.env.NODE_ENV === 'production') {
  /* eslint-disable */
  const ReactGA = require('react-ga');
  ReactGA.initialize('UA-000000-01');
  /* eslint-disable */
}
