import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const PlayStore = ({onClick, size, color}) => {
  return (
    <FontAwesomeIcon
      icon={faGooglePlay}
      onClick={onClick}
      size={size}
      color={color}/>
  )
};

PlayStore.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string
};

PlayStore.defaultProps = {
  onClick: () => {},
  size : '1x',
  color: '#6529e7'
};

export default PlayStore;
