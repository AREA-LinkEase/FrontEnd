import React from 'react';
import { colors } from '../../style/color';
import adjustColorBrightness from '../../utils/adjustColorBrightness';

const TitleTextButton = ({
    backgroundColor = '#1DB954',
    hoverBackgroundColor = adjustColorBrightness(backgroundColor, 20),
    borderColor = '#1DB954',
    borderRadius = '15px',
    width = '361px',
    height = '129px',
    title = 'New saved album',
    titleFont = 'Arial, sans-serif',
    titleSize = '24px',
    titleColor = colors.white,
    titleWeight = 'bold', // ajouter avec fonts
    text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    textFont = 'Arial, sans-serif',
    textSize = '16px',
    textColor = colors.white,
    textWeight = 'normal', // ajouter avec fonts semiBold
    onPressButton = () => console.log('TitleText Button clicked'),
    onMouseOverButton = (e) => {
        (e.currentTarget.style.backgroundColor = hoverBackgroundColor);
        (e.currentTarget.style.borderColor = hoverBackgroundColor);
    },
    onMouseOutButton = (e) => {
        (e.currentTarget.style.backgroundColor = backgroundColor);
        (e.currentTarget.style.borderColor = backgroundColor);
    }
}) => {

    return (
        <div>
            <button
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
                    transition: 'background-color 0.3s'
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    overflow: 'auto'
                }}>
                    <span style={{
                        color: titleColor,
                        fontFamily: titleFont,
                        fontSize: titleSize,
                        fontWeight: titleWeight,
                        paddingBottom: '15px',
                        textAlign: 'left'
                    }}>
                        {title}
                    </span>
                    <span style={{
                        color: textColor,
                        fontFamily: textFont,
                        fontSize: textSize,
                        fontWeight: textWeight,
                        textAlign: 'left'
                    }}>
                        {text}
                    </span>
                </div>
            </button>
        </div>
    );
};

export default TitleTextButton;
