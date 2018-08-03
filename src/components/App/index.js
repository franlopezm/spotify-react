import { withRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

import RouteParams from './RouteParams';
import { Header, Footer, Home, SearchList } from '..';


const App = () => (
  <div className="app">
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <RouteParams exact path="/search/:text" component={SearchList} />
    </Switch>

    <Footer />
  </div>
);

export default withRouter(App);
