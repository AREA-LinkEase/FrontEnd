import React from 'react';
import { colors } from '../../style/color';
import * as Icon from 'react-feather';

const PrimaryInput = ({
  inputValue,
  setInputValue,
  borderColor = colors.lightGrey,
  backgroundColor = colors.lightGrey,
  borderRadius = '15px',
  placeholder = 'Email',
  width = '301px',
  height = '20px',
  placeholderColor = colors.darkGrey,
  textFont = 'Arial, sans-serif',
  textSize = '20px',
  textColor = 'black',
  inputType = 'email',
  leftIconName = 'User',
  leftIconSize = '25px',
  leftIconColor = colors.darkBlue,
  rightIconName,
  rightIconSize = '25px',
  rightIconColor = colors.darkBlue,
}) => {
  const LeftIcon = leftIconName ? Icon[leftIconName] : null;
  const RightIcon = rightIconName ? Icon[rightIconName] : null;

  return (
    <div
      style={{
        display: 'inline-block',
        border: `1px solid ${borderColor}`,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        padding: '10px',
        width: width,
        height: height,
        justifyContent: 'center',
        boxSizing: 'unset'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {LeftIcon && (
          <div style={{ paddingRight: '10px', marginBottom: '-4px' }}>
            {React.createElement(LeftIcon, {
              size: leftIconSize,
              color: leftIconColor,
            })}
          </div>
        )}
        <input
          placeholder={placeholder}
          type={inputType}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            borderWidth: 0,
            backgroundColor: backgroundColor,
            color: inputValue ? textColor : placeholderColor,
            fontSize: textSize,
            fontFamily: textFont,
            outline: 'none',
            width: width,
            height: height
          }}
        />
        {RightIcon && (
          <div style={{ paddingLeft: '10px', marginBottom: '-4px' }}>
            {React.createElement(RightIcon, {
              size: rightIconSize,
              color: rightIconColor,
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrimaryInput;
