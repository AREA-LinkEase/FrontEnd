import React from 'react';
import { fontWeights } from '../../style/font/fontWeights';

const H3Text = ({
  text,
  color = 'black',
  size = '40px',
  font = 'Arial, sans-serif',
	fontWeight = fontWeights.semiBold,
}) => {

  return (
    <div>
			<span style={{color: color, fontSize: size, fontFamily: font, font, fontWeight: fontWeight}}>
					{text}
			</span>
    </div>
  );
};

export default H3Text;
