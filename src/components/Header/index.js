import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import { SearchInput } from '../common';


class Header extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e, text = undefined) {
    const { history, location: { pathname } } = this.props;
    const route = `/${text ? `search/${text}` : ''}`;

    if (route !== pathname) {
      history.push(route);
    }
  }


  render() {
    return (
      <header className="header_ui">
        <h1 className="header_ui__title">
          <span
            onClick={this.onClick}
            role="button"
            tabIndex={0}
          >React Spotify
          </span>
        </h1>

        <nav className="header_ui__nav">
          <SearchInput
            onClick={this.onClick}
          />
        </nav>
      </header>
    );
  }
}


export default withRouter(Header);
