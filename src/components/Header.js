  import React from 'react';
import * as Icon from 'react-feather';
import { colors } from '../style/color';
import { fonts } from '../style/font/fonts';
import { fontWeights } from '../style/font/fontWeights';

const Header = ({
  backgroundColor = colors.white,
  leftIconName = 'ChevronLeft',
  leftIconSize = '38px',
  leftIconColor = colors.black,
  rightIconName = 'Menu',
  rightIconSize = '38px',
  rightIconColor = colors.black,
  CenterChildrenComponent,
  RightChildrenComponent,
  isFilter = false,
  filterSelected,
  setFilterSelected,
  isNumberInfo = false,
  numberItems = {"All": 0, "Private": 2, "Public": 0},
  filterListTag = ["All", "Private", "Public"],
  onClickIconLeft = () => {console.log("Icon Left clicked")},
  onClickIconRight = () => {console.log("Icon Right clicked")}
}) => {
  const LeftIcon = leftIconName ? Icon[leftIconName] : null;
  const RightIcon = rightIconName ? Icon[rightIconName] : null;

  if (isFilter === true) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          paddingTop: '30px',
          paddingBottom: '10px'
      }}>
        {filterListTag.map((tag, index) => (
          <div style={{display: 'flex'}}>
            <div onClick={() => setFilterSelected(tag)} key={index} style={{cursor: 'pointer'}}>
              <div>
                <span style={{color: filterSelected === tag ? colors.black : colors.darkGrey, fontFamily: fonts.openSans, fontSize: '15px', fontWeight: fontWeights.semiBold}}>
                {`${tag} ${isNumberInfo ? `(${numberItems[tag] ?? -1})` : ''}`}
                </span>
              </div>
              { filterSelected === tag && (
                <div style={{
                  border: '1px solid black'
                }}/>
              )}
            </div>
            <div style={{ paddingRight: index < filterListTag.length - 1 ? '10px' : '0'}}/>
          </div>
        ))}
      </div>      
    )
  } else {
    return (
      <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: backgroundColor,
          paddingTop: '30px',
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
  }
};

export default Header;
