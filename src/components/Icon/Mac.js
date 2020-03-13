import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const Mac = ({onClick, size, color}) => {
  return (
    <FontAwesomeIcon
      icon={faApple}
      onClick={onClick}
      size={size}
      color={color}/>
  )
};

Mac.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string
};

Mac.defaultProps = {
  onClick: () => {},
  size : '1x',
  color: '#6529e7'
};

export default Mac;
