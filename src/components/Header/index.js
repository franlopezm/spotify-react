import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import { searchActs } from '../../redux/actions';
import Search from '../Search';


const Header = ({ dispatch }) => {
  const onSearch = bindActionCreators(searchActs, dispatch);

  return (
    <header className="header_ui">
      <h1 className="header_ui__title">
        <span
          onClick={() => onSearch.reset()}
          role="button"
          tabIndex={0}
        >React Spotify
        </span>
      </h1>

      <nav className="header_ui__nav">
        <Search />
      </nav>
    </header>
  );
};


export default connect()(Header);
