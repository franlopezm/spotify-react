import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = { text: props.text };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    const { value } = e.target;

    this.setState({ text: value });
  }

  onClick(e) {
    const { text } = this.state;
    const { onClick } = this.props;

    if (onClick) {
      onClick(e, text);
    }
  }


  render() {
    const { text } = this.state;


    return (
      <div className="search_ui">
        <input
          className="search_ui__input"
          onChange={this.onChange}
          placeholder="Search an artist, album, track..."
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


SearchInput.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
};

SearchInput.defaultProps = { text: '' };
