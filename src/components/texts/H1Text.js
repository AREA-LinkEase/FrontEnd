import React from 'react';
import { fontWeights } from '../../style/font/fontWeights';
import { fonts } from '../../style/font/fonts';
import { colors } from '../../style/color';

const H1Text = ({
  text,
  color = colors.lightlightGrey,
  size = '45px',
  font = fonts.avenirNextLTProRegular,
	fontWeight = 900,
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
