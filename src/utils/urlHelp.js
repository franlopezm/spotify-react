/**
 * Return params of a url
 */
const getParams = ({ match = {} }) => {
  const { params } = match;

  if (params) return params;

  return {};
};


export default { getParams };
