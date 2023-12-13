import React from 'react';
import { fontWeights } from '../../style/font/fontWeights';
import { fonts } from '../../style/font/fonts';

const PText = ({
  text,
  color = 'black',
  size = '20px',
  font = fonts.avenirNextLTProRegular,
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
