import React, {Component} from 'react'
import Album from './Album'

class ListAlbums extends Component {
  render () {
    if (this.props.albums.length > 0) {
      return (
        <section className='form-inline'>
          <div className='form-group'>
            <label>Select an album...</label>
            <select className='form-control' onChange={this.props.selectAlbum}>
              <option value=''>-- Select album --</option>
              {this.props.albums.map(a => {
                return (
                  <Album key={a.id} id={a.id} name={a.name} />
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

export default ListAlbums
