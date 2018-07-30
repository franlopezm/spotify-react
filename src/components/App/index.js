import { withRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

import { Header, Footer, Home, SearchList } from '..';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search/:text" component={SearchList} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
