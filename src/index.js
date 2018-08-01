import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import AuthGrantFlowSpotify from './components/AuthGrantFlowSpotify';
import App from './components/App';

import config from './api/config';


ReactDOM.render(
  <AuthGrantFlowSpotify
    clientId="54ceda5e055145f689fef81d80325eda"
    onSuccess={config.addHeadersToken}
  >
    <HashRouter>
      <App />
    </HashRouter>
  </AuthGrantFlowSpotify>,
  document.getElementById('root')
);

registerServiceWorker();
