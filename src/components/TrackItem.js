import React from 'react';


const TrackItem = (props) => {
  return (
    <li>
      <audio src={props.track.preview_url} type="audio/mpeg" controls></audio>
      <p>{props.track.name}</p>
    </li>
  )
}


export default TrackItem;