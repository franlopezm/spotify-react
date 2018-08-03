import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../../api';
import Item from './Item';


export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      loading: true,
      loadingMore: false,
      offset: 0,
      total: 0
    };

    this.getData = this.getData.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  onClick() {
    const { loadingMore, offset } = this.state;

    if (loadingMore) return;

    this.setState({ loadingMore: true });
    this.getData(offset + 1);
  }

  getData(offset = 0) {
    const { items: oldItems } = this.state;
    const { text, type } = this.props;


    api.search(text, type, offset, (error, res) => {
      if (res.status === 200) {
        const { data: { [`${type}s`]: { items, total } } } = res;

        this.setState({
          loading: false,
          loadingMore: false,
          items: [...oldItems, ...items],
          offset,
          total
        });
        return;
      }

      this.setState({ loading: false });
    });
  }


  render() {
    const { loading, loadingMore, items, total } = this.state;
    const { title } = this.props;

    const numItems = items.length;

    if (loading) return null;


    return (
      <div className="items_list_ui">
        { title && <h4 className="items_list_ui__title">{title} <span>{`${numItems}/${total}`}</span></h4> }

        {
          numItems > 0
            ? (
              <div className="items_list_ui__list">
                { items.map(elem => <Item key={elem.id} item={elem} />) }
              </div>
            )
            : <div className="items_list_ui__not">There are no items for this search.</div>
        }

        {
          numItems > 0 && total > numItems ? (
            <div
              className="items_list_ui__btn"
            >
              <button
                type="button"
                onClick={this.onClick}
              >{loadingMore ? 'Loading...' : 'Load More'}
              </button>
            </div>
          ) : null
        }
      </div>
    );
  }
}

List.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string
};

List.defaultProps = { title: '' };
