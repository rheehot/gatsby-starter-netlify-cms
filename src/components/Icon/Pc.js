import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";

const Pc = ({onClick, size, color}) => {
  return (
    <FontAwesomeIcon
      icon={faWindows}
      onClick={onClick}
      size={size}
      color={color}/>
  )
};

Pc.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string
};

Pc.defaultProps = {
  onClick: () => {},
  size : '1x',
  color: '#6529e7'
};

export default Pc;
