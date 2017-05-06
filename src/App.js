import React, { Component } from 'react'
import './App.css'

import SearchArtist from './components/SearchArtist'
import ListArtists from './components/ListArtists'
import ListAlbums from './components/ListAlbums'
import ListTracks from './components/ListTracks'

class App extends Component {
  constructor () {
    super()
    this.state = {
      artists: [],
      albums: [],
      tracks: []
    }
  }

  handleSearchArtist (event) {
    event.preventDefault()
    let artist = event.target.artist.value
    fetch(`https://api.spotify.com/v1/search?type=artist&query=${artist}`)
      .then(response => {
        return response.json()
      })
      .then(elem => {
        this.setState({ artists: elem.artists.items })
      })
  }

  handleSelectArtist (event) {
    let idAlbums = event.target.value
    fetch(`https://api.spotify.com/v1/artists/${idAlbums}/albums`)
      .then(response => {
        return response.json()
      })
      .then(elem => {
        this.setState({ albums: elem.items })
      })
  }

  handleSelectAlbum (event) {
    let idAlbum = event.target.value
    fetch(`https://api.spotify.com/v1/albums/${idAlbum}/tracks`)
      .then(response => {
        return response.json()
      })
      .then(elem => {
        console.log(elem.items)
        this.setState({ tracks: elem.items })
      })
  }


  render () {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <SearchArtist searchArtist={this.handleSearchArtist.bind(this)} />
          <ListArtists artists={this.state.artists} selectArtist={this.handleSelectArtist.bind(this)} />
          <ListAlbums albums={this.state.albums} selectAlbum={this.handleSelectAlbum.bind(this)} />
          <ListTracks tracks={this.state.tracks} />
        </div>
      </div>
    )
  }
}

export default App
