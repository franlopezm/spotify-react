/**
 * @fileoverview Methods for the spotify search EndPoint.
 */
import axios from 'axios';


export default (textSearch = '', type = 'track', offset = 0, callback) => {
  const url = 'search';

  const params = {
    limit: 21,
    offset: offset * 21,
    q: encodeURI(textSearch),
    type // : 'album,artist,playlist,track',
  };


  axios({ method: 'get', url, params })
    .then(response => callback(undefined, response))
    .catch(e => callback(e, undefined));
};
