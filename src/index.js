import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import Root from './components/Root';
import App from './components/App';


ReactDOM.render(
  <Root>
    <HashRouter>
      <App />
    </HashRouter>
  </Root>,
  document.getElementById('root')
);

registerServiceWorker();
