/**
 * @fileoverview Methods for user authentication in Spotify.
 */
import axios from 'axios';

import config from '../config';

axios.defaults.headers.common['Content-Type'] = 'application/json';

/**
 * Add the authentication token to the headers for calls to the api
 * @param {String} token
 *
 */
const addToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

/**
 * Make the call to get the authentication token
 *
 */
const getToken = () => {
  const { urlAuth, clientId, responseType, redirectUri, showDialog } = config;

  window.location = `${urlAuth}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&show_dialog=${showDialog}`;
};


export default {
  addToken,
  getToken
};
