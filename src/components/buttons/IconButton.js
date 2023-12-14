import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import SvgIcon from '../SvgIcon';
import { svgs } from '../../style/svgs/svgList';
import { colors } from '../../style/color';
import { fonts } from '../../style/font/fonts';
import { fontWeights } from '../../style/font/fontWeights';

const IconButton = ({
                        isIcon = false,
                        isImage = true,
                        iconSize = '25px',
                        iconColor = colors.darkBlue,
                        iconSrc = svgs.google,
                        borderColor = 'black',
                        backgroundColor = 'white',
                        hoverBackgroundColor = 'lightGrey',
                        borderRadius = '90px',
                        width = '361px',
                        height = '60px',
                        textFont = fonts.openSans,
                        fontWeight = fontWeights.bold,
                        textSize = '20px',
                        textColor = 'black',
                        buttonText = 'Google',
                        paddingLeftIcon = '10px',
                        transition = 'background-color 0.3s',
                        onPressButton = () => console.log('Icon Button clicked'),
                        onMouseOverButton = (e) => {
                            e.currentTarget.style.backgroundColor = hoverBackgroundColor;
                        },
                        onMouseOutButton = (e) => {
                            e.currentTarget.style.backgroundColor = backgroundColor;
                        },
                    }) => {
    const IconLogo = isIcon && iconSrc ? Icon[iconSrc] : null;

    return (
        <button
            onClick={onPressButton}
            onMouseOver={onMouseOverButton}
            onMouseOut={onMouseOutButton}
            style={{
                alignItems: 'center',
                border: `0px solid ${borderColor}`,
                backgroundColor,
                borderRadius,
                cursor: 'pointer',
                fontFamily: textFont,
                fontSize: textSize,
                color: textColor,
                fontWeight,
                textAlign: 'center',
                width,
                height,
                transition,
                position: 'relative', // Ajout d'une position relative
            }}
        >
            {IconLogo && (
                <div style={{ paddingLeft: paddingLeftIcon, position: 'absolute' }}>
                    {React.createElement(IconLogo, {
                        size: iconSize,
                        color: iconColor,
                    })}
                </div>
            )}
            {isImage && iconSrc && (
                <div style={{ paddingLeft: paddingLeftIcon, position: 'absolute' }}>
                    <SvgIcon svgName={iconSrc} />
                </div>
            )}
            {buttonText}
        </button>
    );
};

IconButton.propTypes = {
    isIcon: PropTypes.bool,
    isImage: PropTypes.bool,
    iconSize: PropTypes.string,
    iconColor: PropTypes.string,
    iconSrc: PropTypes.string,
    borderColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    borderRadius: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    textFont: PropTypes.string,
    fontWeight: PropTypes.string,
    textSize: PropTypes.string,
    textColor: PropTypes.string,
    buttonText: PropTypes.string,
    paddingLeftIcon: PropTypes.string,
    transition: PropTypes.string,
    onPressButton: PropTypes.func,
    onMouseOverButton: PropTypes.func,
    onMouseOutButton: PropTypes.func,
};

export default IconButton;
