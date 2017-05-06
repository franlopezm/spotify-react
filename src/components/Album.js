import React, {Component} from 'react'

class Album extends Component {
  render () {
    return (
      <option value={this.props.id}>{this.props.name}</option>
    )
  }
}

export default Album
