import React from 'react';

import { Lists } from '../common';


export default (props) => {
  const { text } = props;

  return (
    <div
      key={text}
      className="search_list_ui"
    >
      <Lists
        text={text}
        title="Artists"
        type="artist"
      />

      <Lists
        text={text}
        title="Albums"
        type="album"
      />

      <Lists
        text={text}
        title="Playlists"
        type="playlist"
      />

      <Lists
        text={text}
        title="Tracks"
        type="track"
      />
    </div>
  );
};
