import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';


const Item = ({ item }) => {
  const name = _.get(item, 'name', '');
  const followers = _.get(item, 'followers.total');
  const image = _.get(item, 'images.0.url');
  const artists = _.get(item, 'artists', []).map(elem => elem.name);
  const date = _.get(item, 'release_date');

  return (
    <div className="item_ui">
      <div className="item_ui__img">
        {
          image
          && <img src={image} alt={name} />
        }
      </div>

      <div className="item_ui__info">
        <div className="item_ui__flex">
          <p className="item_ui__text item_ui__text-title ">
            <strong>{name}</strong>
          </p>
        </div>

        <div className="item_ui__flex">
          {
            followers
            && <p className="item_ui__text">Followers: <strong>{followers}</strong></p>
          }
        </div>

        <div className="item_ui__flex">
          {
            artists.length > 0
            && <p className="item_ui__text">Artists: <strong>{artists.join(', ')}</strong></p>
          }
        </div>

        <div className="item_ui__flex">
          <a
            className="item_ui__text item_ui__text-uri"
            href={_.get(item, 'uri')}
          >Open in Spotify
          </a>

          {
            date
            && <p className="item_ui__text item_ui__text-right">date: <strong>{date}</strong></p>
          }
        </div>
      </div>
    </div>
  );
};

Item.propTypes = { item: PropTypes.object.isRequired };

export default Item;
