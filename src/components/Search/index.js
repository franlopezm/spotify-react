import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Search extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    const { value } = e.target;
    console.log('​Search -> onChange -> value', value);
  }

  onClick() {

  }

  render() {
    const { text } = this.props;


    return (
      <div className="search_ui">
        <input
          className="search_ui__input"
          defaultValue={text}
          onChange={this.onChange}
          placeholder="Search an artist..."
          type="text"
          value={text}
        />

        <button
          className="search_ui__btn"
          onClick={this.onClick}
          type="button"
        />
      </div>
    );
  }
}


Search.propTypes = { text: PropTypes.string.isRequired };
