import React from 'react';
import { fontWeights } from '../../style/font/fontWeights';

const PText = ({
  text,
  color = 'black',
  size = '30px',
  font = 'Arial, sans-serif',
	fontWeight = fontWeights.regular,
}) => {

  return (
    <div>
			<span style={{color: color, fontSize: size, fontFamily: font, font, fontWeight: fontWeight}}>
					{text}
			</span>
    </div>
  );
};

export default PText;
