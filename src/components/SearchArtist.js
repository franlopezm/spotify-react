import React, {Component} from 'react'

class SearchArtist extends Component {
  render () {
    return (
      <section id='search-artists'>
        <h3>Spotify API Search Tracks</h3>
        <form className='form-inline' role='form' onSubmit={this.props.searchArtist}>
          <div className='form-group'>
            <label>Search an artist</label>
            <input type='text' className='form-control' placeholder='Input artist name...' name='artist' />
          </div>
          <button type='submit' className='form-control btn btn-primary'>Search</button>
        </form>
      </section>
    )
  }
}

export default SearchArtist
