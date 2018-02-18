import React, { Component } from 'react';

import { dataServices } from '../../services';
import { urlHelpers } from '../../helpers';

import TracksList from '../TracksList';
import ArtistSearch from '../ArtistSearch';
import SelectList from '../SelectList';


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

  componentDidMount () {
    let hashParams = urlHelpers.getHashParams();

    if (!hashParams.access_token) {
      dataServices.getToken();

    } else {
      dataServices.addToken(hashParams.access_token);
    }
  }

// Handler Functions
  handleSearchArtist (event) {
    event.preventDefault();
    let notFound = false;
    
    dataServices.searchArtist(event)
      .then( res => {
        if (res === 'error' || res.artists.items.length === 0) {
          notFound = true;
        }

        this.setState({ artists: res.artists.items, albums: [], tracks: [], notFound })
      });
  }

  handleSelectArtist (event) {
    dataServices.selectArtist(event)
      .then( res => this.setState({ albums: res.items }) );
  }

  handleSelectAlbum (event) {
    dataServices.selectAlbum(event)
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
