import React from 'react'

import TrackItem from './TrackItem'


const TracksList = (props) => {
  
  if (props.tracks.length > 0) {
    return (
      <section id="select-track" className='form-inline'>
        <h5><strong>Select the track to listen</strong></h5>
        <div className='list-group'>
          <ul className="list-unstyled">
          {
            props.tracks.map( elem => <TrackItem key={elem.id} track={elem} /> )
          }
          </ul>
        </div>
      </section>
    );

  } else {
    return (
      <div></div>
    );
  }
}


export default TracksList;