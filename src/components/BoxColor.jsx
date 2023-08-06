import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;

  const rgbToHex = (r, g, b) => {
    const toHex = (value) => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Create the background color style
  const bgColor = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div className="box-color" style={bgColor}>
      <p>RGB: {r}, {g}, {b}</p>
      <p>Hex: {rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
