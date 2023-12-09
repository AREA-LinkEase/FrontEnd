import React from 'react';
import { fontWeights } from '../../style/font/fontWeights';

const H1Text = ({
  text,
  color = 'black',
  size = '70px',
  font = 'Arial, sans-serif',
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

export default H1Text;
