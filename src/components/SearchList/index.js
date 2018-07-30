import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchList extends Component {
  render() {
    const { text, match } = this.props;
    console.log('​Home -> render -> this.props', match);

    if (!text) return null;

    return (
      <div />
    );
  }
}


SearchList.propTypes = { text: PropTypes.string };


SearchList.defaultProps = { text: '' };
