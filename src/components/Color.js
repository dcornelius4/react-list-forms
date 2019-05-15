import React from 'react';
import PropTypes from 'prop-types';

const hexColor = color => {
  return `${color.toString(16).padStart(2, 0)}`.toUpperCase();
};

const hexRGB = (rgb) => {
  return `#${hexColor(rgb.red)}${hexColor(rgb.green)}${hexColor(rgb.blue)}`;
};

function Color({ name, rgb }) {
  const hex = hexRGB(rgb);

  const colorStyle = {
    display: 'flex',
    backgroundColor: hex,
    width: '1em',
    height: '1em'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name || hex} <div style={colorStyle}></div></dd>

      <dt>RGB</dt>
      <dd>
        <p>Red - {rgb.red}</p>
        <p>Green - {rgb.green}</p>
        <p>Blue - {rgb.blue}</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  rgb: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  })
};

export default Color;
