import React, { Component } from 'react';
import './App.css';

import DataService from './services/dataService';
import urlHelpers from './helpers/urlHelpers';

import SearchArtist from './components/SearchArtist';
import ListArtists from './components/ListArtists';
import ListAlbums from './components/ListAlbums';
import ListTracks from './components/ListTracks';


export default class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      artists: [],
      albums: [],
      tracks: [],
    };

    this.searchArtist = this.handleSearchArtist.bind(this);
    this.selectArtist = this.handleSelectArtist.bind(this);
    this.selectAlbum = this.handleSelectAlbum.bind(this);
  }

  componentWillMount () {
    let hashParams = urlHelpers.getHashParams();

    if (!hashParams.access_token) {
      DataService.getToken();

    } else {
      DataService.addToken(hashParams.access_token);
    }
  }

// Handler Functions
  handleSearchArtist (event) {
    event.preventDefault();
    
    DataService.searchArtist(event)
      .then(elem => this.setState({ artists: elem.artists.items }));
  }

  handleSelectArtist (event) {
    DataService.selectArtist(event)
      .then(elem => this.setState({ albums: elem.items }));
  }

  handleSelectAlbum (event) {
    DataService.selectAlbum(event)
      .then(elem => this.setState({ tracks: elem.items }));
  }


  render () {
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
