import React from 'react';
import PropTypes from 'prop-types';
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
      <span style={{ color, fontSize: size, fontFamily: font, fontWeight }}>
        {text}
      </span>
        </div>
    );
};

PText.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
    font: PropTypes.string,
    fontWeight: PropTypes.string,
};

export default PText;
