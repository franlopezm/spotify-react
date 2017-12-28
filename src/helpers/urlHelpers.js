//get hash params from url
const getHashParams = () => {
  let hashParams = {};
  let e, r = /([^&;=]+)=?([^&;]*)/g;
  let q = window.location.hash.substring(1);

  while ((e = r.exec(q)) !== null) { // eslint-disable-line
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }

  return hashParams;
}


export default {
  getHashParams
}