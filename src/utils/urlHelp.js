/**
 * Return params of a url
 */
const getParams = ({ match = {}, computedMatch = {} }) => {
  const newParams = { ...computedMatch, ...match };
  const { params } = newParams;

  if (params) return params;

  return {};
};


/**
 * Get hash params from url
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
