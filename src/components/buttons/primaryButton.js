import React from 'react';
import { colors } from '../../style/color';
import adjustColorBrightness from '../../utils/adjustColorBrightness';
import {fonts} from "../../style/font/fonts";
import {fontWeights} from "../../style/font/fontWeights";

const PrimaryButton = ({
  onPressButton = () => console.log('Primary Button clicked'),
  onMouseOverButton = (e) => {
    (e.target.style.backgroundColor = hoverBackgroundColor);
  },
  onMouseOutButton = (e) => {
    (e.target.style.backgroundColor = backgroundColor);
  },
  borderColor = colors.darkPurple,
  backgroundColor = colors.darkPurple,
  hoverBackgroundColor = adjustColorBrightness(colors.darkPurple, 20),
  borderRadius = '90px',
  width = '361px',
  height = '60px',
  textFont = fonts.openSans,
  fontWeight = fontWeights.bold,
  textSize = '20px',
  textColor = 'white',
  buttonText = 'Primary',
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
        fontWeight: fontWeight,
        textAlign: 'center',
        width: width,
        height: height,
        fontWeight: fontWeight,
        transition: transition
      }}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
