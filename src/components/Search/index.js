import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { searchActs } from '../../redux/actions';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { text: props.text };

    this.onSearch = bindActionCreators(searchActs, props.dispatch);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getText = this.getText.bind(this);
  }

  componentDidMount() {
    this.getText();
  }

  componentDidUpdate() {
    this.getText();
  }

  onChange(e) {
    const { value } = e.target;

    this.setState({ text: value });
  }

  onClick() {
    const { text } = this.state;

    this.onSearch.search(text);
  }

  getText() {
    const { text, loading } = this.props;
    const { text: oldText } = this.state;

    if (loading && text !== oldText) {
      this.setState({ text });
      this.onSearch.search(text);
    }
  }


  render() {
    const { text } = this.state;


    return (
      <div className="search_ui">
        <input
          className="search_ui__input"
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


Search.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(state => ({
  text: state.search.text,
  loading: state.search.loading
}))(Search);
