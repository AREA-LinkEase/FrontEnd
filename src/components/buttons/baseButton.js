import React from 'react';
import { colors } from '../../style/color';

const BaseButton = ({
  onPressButton,
  onMouseOverButton,
  onMouseOutButton,
  borderColor,
  backgroundColor,
  hoverBackgroundColor,
  borderRadius,
  width,
  height,
  textFont,
  textSize,
  textColor,
  buttonText,
  transition,
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

export default BaseButton;
