import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../style/color';
import * as Icon from 'react-feather';
import { fonts } from '../../style/font/fonts';
import { fontWeights } from '../../style/font/fontWeights';

const PrimaryInput = ({
  inputValue,
  setInputValue,
  borderColor = colors.lightGrey,
  backgroundColor = colors.lightGrey,
  borderRadius = '15px',
  placeholder = 'Email',
  width = '301px',
  height = '40px',
  placeholderColor = colors.darkGrey,
  textFont = fonts.openSans,
  fontWeight = fontWeights.semiBold,
  textSize = '20px',
  textColor = 'black',
  inputType = 'email',
  leftIconName = 'User',
  leftIconSize = '25px',
  leftIconColor = colors.darkBlue,
  rightIconName,
  rightIconSize = '25px',
  rightIconColor = colors.darkBlue,
  isRightIconIsActive,
  onPressRightIcon = () => {
    console.log('Clicked on right icon');
  },
  isTextArea = false,
  rows = 5,
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
        height: isTextArea ? 'auto' : height,
        justifyContent: 'center',
        boxSizing: 'unset',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {LeftIcon && (
          <div style={{ paddingRight: '15px', marginBottom: '-4px' }}>
            {React.createElement(LeftIcon, {
              size: leftIconSize,
              color: leftIconColor,
            })}
          </div>
        )}
        {isTextArea ? (
          <textarea
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            rows={rows}
            style={{
              borderWidth: 0,
              backgroundColor: backgroundColor,
              color: inputValue ? textColor : placeholderColor,
              fontSize: textSize,
              fontFamily: textFont,
              outline: 'none',
              fontWeight: fontWeight,
              width: width,
              resize: 'none', // Empêcher le redimensionnement de la zone de texte
            }}
          />
        ) : (
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
              fontWeight: fontWeight,
              width: width,
              height: height,
            }}
          />
        )}
        {RightIcon && (
          <div
            onClick={() => {
              onPressRightIcon(isRightIconIsActive);
            }}
            style={{ marginBottom: '-4px', paddingLeft: '10px' }}
          >
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

PrimaryInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  placeholderColor: PropTypes.string,
  textFont: PropTypes.string,
  fontWeight: PropTypes.string,
  textSize: PropTypes.string,
  textColor: PropTypes.string,
  inputType: PropTypes.string,
  leftIconName: PropTypes.string,
  leftIconSize: PropTypes.string,
  leftIconColor: PropTypes.string,
  rightIconName: PropTypes.string,
  rightIconSize: PropTypes.string,
  rightIconColor: PropTypes.string,
  isRightIconIsActive: PropTypes.bool,
  onPressRightIcon: PropTypes.func,
  isTextArea: PropTypes.bool,
  rows: PropTypes.number,
};

export default PrimaryInput;
