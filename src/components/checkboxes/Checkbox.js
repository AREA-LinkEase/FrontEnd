import React from 'react';
import { colors } from '../../style/color';

const Checkbox = ({
  isChecked,
  setIsChecked,
  borderColor = isChecked ? colors.lightPurple : colors.darkBlue,
  backgroundColor = isChecked ? colors.lightPurple : colors.white,
  borderRadius = '5px',
  borderWidth = '2px',
  width = '30px',
  height = '30px',
}) => {

  return (
    <div
			onClick={() => setIsChecked(!isChecked)}
    	style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        border: `${borderWidth} solid ${borderColor}`,
        borderRadius: borderRadius,
        width: width,
        height: height
    }}/>
  );
};

export default Checkbox;
