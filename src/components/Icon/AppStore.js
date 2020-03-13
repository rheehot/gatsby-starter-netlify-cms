import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";

const AppStore = ({onClick, size, color}) => {
  return (
    <FontAwesomeIcon
      icon={faAppStore}
      onClick={onClick}
      size={size}
      color={color}/>
  )
};

AppStore.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string
};

AppStore.defaultProps = {
  onClick: () => {},
  size : '1x',
  color: '#6529e7'
};

export default AppStore;
