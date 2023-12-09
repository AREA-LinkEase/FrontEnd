import React from 'react';
import { fontWeights } from '../../style/font/fontWeights';

const BasicText = ({
  text,
  color,
  size,
  font,
  fontWeight = fontWeights.bold,
}) => {

  return (
    <div>
			<span style={{color: color, fontSize: size, fontFamily: font, font, fontWeight: fontWeight}}>
					{text}
			</span>
    </div>
  );
};

export default BasicText;
