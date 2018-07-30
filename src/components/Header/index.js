import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import { SearchInput } from '../common';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { oldText: '' };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.checkUrlParams();
  }

  onClick(e, text = undefined) {
    const { history, location: { pathname } } = this.props;
    const route = `/${text ? `search/${text}` : ''}`;


    if (route !== pathname) {
      if (!text) {
        this.setState({ oldText: '' });
      }

      history.push(route);
    }
  }

  checkUrlParams() {
    const { location: { pathname } } = this.props;

    if (pathname.indexOf('/search/') !== -1) {
      const oldText = pathname.replace(/\/search\//, '').trim();

      if (oldText) {
        this.setState({ oldText });
      }
    }
  }


  render() {
    const { oldText } = this.state;


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
            key={oldText || 'search'}
            text={oldText}
            onClick={this.onClick}
          />
        </nav>
      </header>
    );
  }
}


export default withRouter(Header);
