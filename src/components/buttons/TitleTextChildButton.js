import React from 'react';
import { colors } from '../../style/color';
import adjustColorBrightness from '../../utils/adjustColorBrightness';
import { fontWeights } from '../../style/font/fontWeights';
import * as Icon from 'react-feather';
import {formatTextBold} from '../../utils/formatTextBold.js';

const TitleTextChildButton = ({
    backgroundColor = '#1DB954',
    hoverBackgroundColor = adjustColorBrightness(backgroundColor, 20),
    borderColor = '#1DB954',
    borderRadius = '15px',
    width = '361px',
    height = '129px',
    title = 'Nom du Workspace',
    titleFont = 'Arial, sans-serif',
    titleSize = '24px',
    titleColor = colors.white,
    titleWeight = fontWeights.bold,
    text = 'par **Nom du createur**',
    textFont = 'Arial, sans-serif',
    textSize = '15px',
    textColor = colors.white,
    textWeight = fontWeights.normal,
    iconName = '',
    iconSize = '25px',
    iconColor = colors.white,
    paddingBottomFirst = '15px',
    paddingBottomSecond = '15px',
    paddingRightIcon = '20px',
    onPressButton = () => console.log('TitleText Button clicked'),
    onMouseOverButton = (e) => {
        (e.currentTarget.style.backgroundColor = hoverBackgroundColor);
        (e.currentTarget.style.borderColor = hoverBackgroundColor);
    },
    onMouseOutButton = (e) => {
        (e.currentTarget.style.backgroundColor = backgroundColor);
        (e.currentTarget.style.borderColor = backgroundColor);
    },
    ComponentChildren,
}) => {

    const IconLogo = iconName ? Icon[iconName] : null;

    return (
        <div>
            <div
                onClick={onPressButton}
                onMouseOver={onMouseOverButton}
                onMouseOut={onMouseOutButton}
                style={{
                    backgroundColor: backgroundColor,
                    borderRadius: borderRadius,
                    border: `1px solid ${borderColor}`,
                    cursor: 'pointer',
                    width: width,
                    height: height,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    paddingTop: '15px',
                    paddingLeft: '15px',
                    transition: 'background-color 0.3s',
                    paddingRight: '2px'
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    overflow: 'auto'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        paddingBottom: paddingBottomFirst
                    }}>
                        <div>
                            <span style={{
                                color: titleColor,
                                fontFamily: titleFont,
                                fontSize: titleSize,
                                fontWeight: titleWeight,
                                textAlign: 'left'
                            }}>
                                {title}
                            </span>
                        </div>
                        {IconLogo && (
                            <div style={{ paddingRight: paddingRightIcon }}>
                                {React.createElement(IconLogo, {
                                size: iconSize,
                                color: iconColor,
                                })}
                            </div>
                        )}
                    </div>
                    <div>
                        <span style={{
                            color: textColor,
                            fontFamily: textFont,
                            fontSize: textSize,
                            fontWeight: textWeight,
                            textAlign: 'left'
                        }}>
                            {formatTextBold(text)}
                        </span>
                    </div>
                    {ComponentChildren && (
                        <div style={{paddingTop: paddingBottomSecond}}>
                            <ComponentChildren/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TitleTextChildButton;
