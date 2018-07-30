import { Route } from 'react-router-dom';
import React from 'react';

import { urlHelp } from '../../utils';


export default ({ component: Component, ...rest }) => {
  const params = urlHelp.getParams(rest);


  return (
    <Route
      {...rest}
      render={props => <Component {...props} {...params} />}
    />
  );
};
