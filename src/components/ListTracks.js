import React, {Component} from 'react'
import Track from './Track'

class ListTracks extends Component {
  render () {
    if (this.props.tracks.length > 0) {
      return (
        <section id="select-track" className='form-inline'>
          <h5><strong>Select the track to listen</strong></h5>
          <div className='list-group'>
            <ul className="list-unstyled">
                {this.props.tracks.map(elem => {
                  return (
                    <Track key={elem.id} track={elem} />
                  )
                })}
            </ul>
          </div>
      </section>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default ListTracks
