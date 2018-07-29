import React from 'react';

import Search from '../Search';


export default () => (
  <header className="header_ui">
    <h1 className="header_ui__title">React Spotify</h1>

    <nav className="header_ui__nav">
      <Search />
    </nav>
  </header>
);
