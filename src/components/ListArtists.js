import React, {Component} from 'react'
import Artist from './Artists'

class ListArtist extends Component {
  render () {
    if (this.props.artists.length > 0) {
      return (
        <section className='form-inline'>
          <div className='form-group'>
            <label>Select an artist...</label>
            <select className='form-control' onChange={this.props.selectArtist}>
              <option value=''>-- Select artist --</option>
              {this.props.artists.map(a => {
                return (
                  <Artist key={a.id} id={a.id} name={a.name} />
                )
              })}
            </select>
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

export default ListArtist
