import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default
import ToggleColorModeProvider from './utils/ToggleColorMode';
import store from './app/store';
import './index.css';
// eslint-disable-next-line import/no-named-as-default
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorModeProvider>
  </Provider>,
  document.getElementById('root'),
);
