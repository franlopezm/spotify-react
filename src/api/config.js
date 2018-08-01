/**
 * @fileoverview Configuration for the spotify api endpoint
 */
import axios from 'axios';

axios.defaults.baseURL = 'https://api.spotify.com/v1/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

/**
 * Add the authentication token to the headers for calls to the api
 * @param {String} token
 *
 */
const addHeadersToken = ({ access_token: token }) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default { addHeadersToken };
