import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {store} from './store';
import {Provider} from 'react-redux';
import HistoryRouter from './components/history-router/history-router';
import {createBrowserHistory} from 'history';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const browserHistory = createBrowserHistory();


root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <App />
    </HistoryRouter>
  </Provider>
);
