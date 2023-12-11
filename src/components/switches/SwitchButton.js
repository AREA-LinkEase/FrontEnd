import React, { useState, useEffect } from 'react';
import { colors } from '../../style/color';
import { fontWeights } from '../../style/font/fontWeights';

const SwitchButton = ({
  backgroundColorOn = colors.lightlightGrey,
  backgroundColorOff = colors.darkdarkGrey,
  isSwitched,
  setIsSwitched,
  width = '327px',
  height = '64px',
  borderRadius = '90px',
  colorOff = colors.grey,
  colorOn = colors.purple,
  textOn = 'Désactiver',
  textOff = 'Activer',
  textFont = 'Arial, sans-serif',
  TextWeight = fontWeights.bold,
  textColorOff = colors.white,
  textColorOn = colors.lightBlack,
  isLittle,
}) => {
  const [textSize, setTextSize] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);

  useEffect(() => {
    const containerWidth = parseInt(width, 10);
    const containerHeight = parseInt(height, 10);

    const calculatedTextSize = containerWidth * (isLittle ? 0.18 : 0.1);
    setTextSize(calculatedTextSize);

    const calculatedButtonWidth = (containerWidth * (isLittle ? 0.19 : 0.35)) / containerWidth * 100;
    setButtonWidth(calculatedButtonWidth);

    const calculatedButtonHeight = (containerHeight * (isLittle ? 0.19 : 0.35)) / containerHeight * 100;
    setButtonHeight(calculatedButtonHeight);
  }, [width, height, isLittle]);

  const toggleSwitch = () => {
    setIsSwitched((prevSwitched) => !prevSwitched);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: width,
        height: height,
        backgroundColor: isSwitched ? backgroundColorOn : backgroundColorOff,
        borderRadius: borderRadius,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px',
        transition: 'background-color 0.4s ease',
      }}
      onClick={toggleSwitch}
    >
      <span
        style={{
          color: isSwitched ? textColorOn : textColorOff,
          fontFamily: textFont,
          fontSize: `${textSize}px`,
          fontWeight: TextWeight,
        }}
      >
        {isSwitched ? textOn : textOff}
      </span>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: isSwitched ? `calc(100% - ${buttonWidth - 10}px)` : `${buttonWidth - 10}px`,
          transform: 'translate(-50%, -50%)',
          width: `${buttonWidth}px`,
          height: `${buttonHeight}px`,
          borderRadius: '50%',
          backgroundColor: isSwitched ? colorOn : colorOff,
          boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)',
          transition: 'left 0.3s ease, background-color 0.3s ease',
        }}
      />
    </div>
  );
};

export default SwitchButton;
