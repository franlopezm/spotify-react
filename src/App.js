import React, { Component } from 'react';
import './App.css';

import SearchArtist from './components/SearchArtist';
import ListArtists from './components/ListArtists';
import ListAlbums from './components/ListAlbums';
import ListTracks from './components/ListTracks';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      artists: [],
      albums: [],
      tracks: [],
    };

    this.searchArtist = this.handleSearchArtist.bind(this);
    this.selectArtist = this.handleSelectArtist.bind(this);
    this.selectAlbum = this.handleSelectAlbum.bind(this);
  }

// Handler Functions
  handleSearchArtist(event) {
    event.preventDefault();
    const artist = event.target.artist.value;
    fetch(`https://api.spotify.com/v1/search?type=artist&query=${artist}`)
      .then(response => response.json())
      .then(elem => this.setState({ artists: elem.artists.items }));
  }

  handleSelectArtist(event) {
    const idAlbums = event.target.value;
    fetch(`https://api.spotify.com/v1/artists/${idAlbums}/albums`)
      .then(response => response.json())
      .then(elem => this.setState({ albums: elem.items }));
  }

  handleSelectAlbum(event) {
    const idAlbum = event.target.value;
    fetch(`https://api.spotify.com/v1/albums/${idAlbum}/tracks`)
      .then(response => response.json())
      .then(elem => this.setState({ tracks: elem.items }));
  }


// Render
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <SearchArtist searchArtist={this.searchArtist} />
          <ListArtists artists={this.state.artists} selectArtist={this.selectArtist} />
          <ListAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />
          <ListTracks tracks={this.state.tracks} />
        </div>
      </div>
    );
  }
}
