import React from 'react';
import { colors } from '../../style/color';
import * as Icon from 'react-feather';
import SvgIcon from '../SvgIcon';
import { svgs } from '../../style/svgs/svgList';

const IconButton = ({
  isIcon = false,
  isImage = true,
  iconSize = '25px',
  iconColor = colors.darkBlue,
  iconSrc = svgs.google,
  borderColor = 'black',
  backgroundColor = 'white',
  hoverBackgroundColor = 'lightGrey',
  borderRadius = '30px',
  width = '361px',
  height = '81px',
  textFont = 'Arial, sans-serif',
  textSize = '20px',
  textColor = 'black',
  buttonText = 'GOOGLE',
  paddingLeftIcon = '10px',
  transition = 'background-color 0.3s',
  onPressButton = () => console.log('Icon Button clicked'),
  onMouseOverButton = (e) => {
    (e.currentTarget.style.backgroundColor = hoverBackgroundColor);
  },
  onMouseOutButton = (e) => {
    (e.currentTarget.style.backgroundColor = backgroundColor);
  }
}) => {

  const IconLogo = (isIcon && iconSrc) ? Icon[iconSrc] : null;

  return (
    <div>
      <button
        onClick={onPressButton}
        onMouseOver={onMouseOverButton}
        onMouseOut={onMouseOutButton}
        style={{
          alignItems: 'center',
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
        {IconLogo && (
          <div style={{ paddingLeft: paddingLeftIcon, position: 'absolute' }}>
            {React.createElement(IconLogo, {
              size: iconSize,
              color: iconColor,
            })}
          </div>
        )}
       {(isImage && iconSrc) && (
          <div style={{ paddingLeft: paddingLeftIcon, position: 'absolute' }}>
            <SvgIcon svgName={iconSrc}/>
          </div>
        )}
        {buttonText}
      </button>
    </div>
  );
};

export default IconButton;
