import React, {Component} from 'react'

class Artist extends Component {
  render () {
    return (
      <option value={this.props.id}>{this.props.name}</option>
    )
  }
}

export default Artist
