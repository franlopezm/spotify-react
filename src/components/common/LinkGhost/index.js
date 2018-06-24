import React from 'react';
import PropTypes from 'prop-types';


const LinkGhost = ({className, image, link, children}) => (
  <a 
    className={`link_ghost_ui ${className}`}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {
      image ? <img src={image} alt={children ? children : 'img link ghost'} /> : null
    }
    {
      children ? children : null
    }
  </a>
)

LinkGhost.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string, 
  link: PropTypes.string.isRequired,
}

LinkGhost.defaultProps = {
  children: '',
  className: '',
  image: ''
}


export default LinkGhost;
