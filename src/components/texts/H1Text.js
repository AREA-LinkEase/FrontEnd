import React from 'react';
import PropTypes from 'prop-types';
import { fontWeights } from '../../style/font/fontWeights';
import { fonts } from '../../style/font/fonts';
import { colors } from '../../style/color';

const H1Text = ({
                    text,
                    color = colors.lightlightGrey,
                    size = '45px',
                    font = fonts.openSans,
                    fontWeight = fontWeights.bold,
                }) => {

    return (
        <div>
      <span style={{ color, fontSize: size, fontFamily: font, fontWeight }}>
        {text}
      </span>
        </div>
    );
};

H1Text.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
    font: PropTypes.string,
    fontWeight: PropTypes.number,
};

export default H1Text;
