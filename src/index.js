import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
// ECMA Script Polyfills:
import "core-js/stable";
// Needed for the generator functions which are transpiled from your async await keywords
import "regenerator-runtime/runtime";

const store = createStore(function (state, action) {
  const _state =
    state == null
      ? {
          donate: 0,
          message: '',
        }
      : state;

  switch (action.type) {
    case 'RESET_TOTAL_DONATE':
      return Object.assign({}, _state, {
      donate: 0,
    });
    case 'UPDATE_TOTAL_DONATE':
      return Object.assign({}, _state, {
        donate: _state.donate + action.amount,
      });
    case 'UPDATE_MESSAGE':
      return Object.assign({}, _state, {
        message: action.message,
      });

    default:
      return _state;
  }
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
