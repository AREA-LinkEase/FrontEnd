  import React from 'react';
import * as Icon from 'react-feather';
import { colors } from '../style/color';

const Header = ({
  backgroundColor = colors.white,
  leftIconName = 'ArrowLeft',
  leftIconSize = '48px',
  leftIconColor = colors.black,
  rightIconName = 'Menu',
  rightIconSize = '48px',
  rightIconColor = colors.black,
  CenterChildrenComponent,
  RightChildrenComponent,
  onClickIconLeft = () => {console.log("Icon Left clicked")},
  onClickIconRight = () => {console.log("Icon Right clicked")}
}) => {
  const LeftIcon = leftIconName ? Icon[leftIconName] : null;
  const RightIcon = rightIconName ? Icon[rightIconName] : null;

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: backgroundColor,
        paddingTop: '10px',
        paddingBottom: '10px'
    }}>
        {LeftIcon && (
          <div
            onClick={onClickIconLeft}
            style={{ paddingLeft: '7px', marginBottom: '-4px', cursor: 'pointer' }}>
            {React.createElement(LeftIcon, {
              size: leftIconSize,
              color: leftIconColor,
            })}
          </div>
        )}
        {CenterChildrenComponent && (
            <CenterChildrenComponent/>
        )}
        {RightChildrenComponent && (
            <div onClick={onClickIconRight}>
                <RightChildrenComponent/>
            </div>
        )}
        {(RightIcon && !RightChildrenComponent) && (
          <div
            onClick={onClickIconRight}
            style={{ paddingRight: '10px', marginBottom: '-4px', cursor: 'pointer' }}>
            {React.createElement(RightIcon, {
              size: rightIconSize,
              color: rightIconColor,
            })}
          </div>
        )}
    </div>
  );
};

export default Header;
