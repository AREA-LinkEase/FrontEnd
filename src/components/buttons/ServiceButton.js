import React, { useState } from 'react';
import { colors } from '../../style/color';
import adjustColorBrightness from '../../utils/adjustColorBrightness';

const ServiceButton = ({
    onClickButton = () => { console.log("Service button clicked") },
    width = '160px',
    height = '160px',
    borderRadius = '15px',
    backgroundColor = '#1DB954',
    imgLink,
    serviceName = 'Spotify'
}) => {

    const [hover, setHover] = useState(false);

    return (
        <div
            onClick={onClickButton}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                backgroundColor: hover ? adjustColorBrightness(backgroundColor, 20) : backgroundColor,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
            }}>
            <div style={{
							display: 'flex',
							justifyContent: 'center',
							paddingBottom: '10px'
						}}>
                <img
                    src={imgLink}
                    alt={serviceName}
                    style={{
                        width: '50%',
                        height: 'auto'
                    }}
                />
            </div>
            <div>
                <span style={{
                    color: colors.white,
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '24px',
                    fontWeight: 'bold'
                }}>
                    {serviceName}
                </span>
            </div>
        </div>
    );
};

export default ServiceButton;
