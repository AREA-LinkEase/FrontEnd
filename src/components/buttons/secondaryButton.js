import React from 'react';
import { colors } from '../../style/color';
import adjustColorBrightness from '../../utils/adjustColorBrightness';

const SecondaryButton = ({
  onPressButton = () => console.log('Secondary Button clicked'),
  onMouseOverButton = (e) => {
    (e.target.style.backgroundColor = hoverBackgroundColor);
  },
  onMouseOutButton = (e) => {
    (e.target.style.backgroundColor = backgroundColor);
  },
  borderColor = colors.lightPurple,
  backgroundColor = colors.lightPurple,
  hoverBackgroundColor = adjustColorBrightness(colors.lightPurple, 20),
  borderRadius = '30px',
  width = '361px',
  height = '55px',
  textFont = 'Arial, sans-serif',
  textSize = '20px',
  textColor = 'white',
  buttonText = 'Secondary',
  transition = 'background-color 0.3s',
}) => {

  return (
    <button
      onClick={onPressButton}
      onMouseOver={onMouseOverButton}
      onMouseOut={onMouseOutButton}
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        cursor: 'pointer',
        fontFamily: textFont,
        fontSize: textSize,
        color: textColor,
        textAlign: 'center',
        width: width,
        height: height,
        transition: transition
      }}
    >
      {buttonText}
    </button>
  );
};

export default SecondaryButton;
