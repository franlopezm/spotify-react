import React, { Component } from 'react';
import './App.css';

import DataService from './services/dataService';
import urlHelpers from './helpers/urlHelpers';

import TracksList from './components/TracksList';
import ArtistSearch from './components/ArtistSearch';
import SelectList from './components/SelectList';


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
    let notFound = false;
    
    DataService.searchArtist(event)
      .then( res => {
        if (res === 'error' || res.artists.items.length === 0) {
          notFound = true;
        }

        this.setState({ artists: res.artists.items, albums: [], tracks: [], notFound })
      });
  }

  handleSelectArtist (event) {
    DataService.selectArtist(event)
      .then( res => this.setState({ albums: res.items }) );
  }

  handleSelectAlbum (event) {
    DataService.selectAlbum(event)
      .then( res => this.setState({ tracks: res.items }) );
  }


  render () {
    const { artists, albums, tracks, notFound } = this.state;

    return (
      <div className="container">
        <div className="jumbotron">
          <ArtistSearch searchArtist={this.searchArtist} notFound={notFound || false} />

          <SelectList
            items={artists}
            label='Select an artist...'
            optionLabel='Select artist'
            onChange={this.selectArtist}
          />

          <SelectList
            items={albums}
            label='Select an album...'
            optionLabel='Select album'
            onChange={this.selectAlbum}
          />
          
          <TracksList tracks={tracks} />
        </div>
      </div>
    );
  }
}
