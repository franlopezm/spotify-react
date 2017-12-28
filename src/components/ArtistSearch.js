import React from 'react';


const ArtistSearch = (props) => {
  
  return (
    <section id='search-artists'>
      <h3>Spotify API Search Tracks</h3>
      
      <form className='form-inline' onSubmit={props.searchArtist}>
        <div className='form-group'>
          <label>Search an artist</label>
          <input type='text' className='form-control' placeholder='Input artist name...' name='artist' />
        </div>
        <button type='submit' className='form-control btn btn-primary'>Search</button>
      </form>

      {
        props.notFound && (<div className="alert alert-danger" role="alert"><strong>No results found.</strong></div>)
      }
    </section>
  )
}


export default ArtistSearch