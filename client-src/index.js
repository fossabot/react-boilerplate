import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import initReactFastclick from 'react-fastclick';
import store from './store';
import App from './containers';
import './styles/main.scss';

// fast-click
initReactFastclick();

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

/* eslint-disable */
if (process.env.NODE_ENV === 'production') {
  ((i, s, o, g, r, a, m) => {
    i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)
    },
    i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];
    a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })
  (window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-XXXXXXXX-1', 'auto');
  ga('send', 'pageview');
}
/* eslint-disable */
