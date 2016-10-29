'use strict';

const express = require('express');
const React = require('react');
const ReactDOM = require('react-dom/server');
const {createStore} = require('redux');
const {Provider} = require('react-redux');
const App = require('./components/app');
const reducer = require('./reducer');

function initComponents(store) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const app = express();

const cachedStore = createStore(reducer);
const cachedComponents = initComponents(cachedStore);
app.get('/cached', (req, res) => {
  cachedStore.dispatch({type: 'reset'});
  cachedStore.dispatch({type: 'increment'});
  cachedStore.dispatch({type: 'increment'});
  cachedStore.dispatch({type: 'increment'});
  cachedStore.dispatch({type: 'complex'});
  res.send(ReactDOM.renderToString(cachedComponents));
});
app.get('/uncached', (req, res) => {
  const store = createStore(reducer);
  store.dispatch({type: 'increment'});
  store.dispatch({type: 'increment'});
  store.dispatch({type: 'increment'});
  store.dispatch({type: 'complex'});
  res.send(ReactDOM.renderToString(initComponents(store)));
});

app.listen(8000);
