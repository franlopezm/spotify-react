/**
 * @fileoverview Methods to work with urls
 */

/**
 * Get the parameters contained from a url
 * @param {Object} match
 * @param {Object} computedMatch
 *
 * @return {Object} Contain params of a url
 */
const getParams = ({ match = {}, computedMatch = {} }) => {
  const newParams = { ...computedMatch, ...match };
  const { params } = newParams;

  if (params) return params;

  return {};
};


/**
 * Get the hash params contained from a url
 *
 * @return {Object} Contain hash params of a url
 */
const getHashParams = () => {
  const hashParams = {};
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);

  let e = '';
   while ((e = r.exec(q)) !== null) { // eslint-disable-line
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }

  return hashParams;
};


export default {
  getParams,
  getHashParams
};
