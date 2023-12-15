import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styles from "./Workspace.module.css";
import Header from "../../components/Header";
import PText from "../../components/texts/PText";
import { fontWeights } from "../../style/font/fontWeights";
import { fonts } from "../../style/font/fonts";
import { colors } from "../../style/color";
import { formatTextBold } from "../../utils/formatTextBold";
import adjustColorBrightness from "../../utils/adjustColorBrightness";
import SwitchButton from "../../components/switches/SwitchButton";
import { calculatePixelSize } from "../../utils/calculatePixelSize";
import IconButton from "../../components/buttons/IconButton";
import BottomNavbar from "../../components/navbar/BottomNavbar";

const Workspace = ({workspaceValues}) => {

	const [isSwitched, setIsSwitched] = useState(workspaceValues.access === "Private" ? false : true);
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

  const handleSwitchChange = () => {
    setIsSwitched((prevSwitched) => !prevSwitched);
  };

	return (
		<div className={styles.workspaceBody}>
			<div style={{ position: 'fixed', zIndex: 1000, backgroundColor: 'white'}}>
			<div className={styles.workspaceDescriptionContainer} style={{backgroundColor: isSwitched ? workspaceValues.color : "#777777"}}>
				<Header rightIconName="Settings" backgroundColor={isSwitched ? workspaceValues.color : "#777777"} leftIconColor={colors.white} rightIconColor={colors.white} leftIconSize="30px" rightIconSize="25px" marginBottomRightIcon="-2px"/>
				<div style={{paddingLeft: '20px', paddingRight: '20px'}}>
					<div style={{paddingBottom: '7px'}}>
						<PText text={workspaceValues.name} fontWeight={fontWeights.bold} font={fonts.openSans} color={colors.white} size="21px"/>
					</div>
					<div  style={{paddingBottom: '15px'}}>
						<PText text={formatTextBold(`Par **${workspaceValues.creator}**`)} font={fonts.openSans} color={colors.white} size="12px"/>
					</div>
					<div style={{paddingBottom: '15px'}}>
						<PText text={workspaceValues.description} font={fonts.openSans} color={colors.white} size="11px" lineHeight="0"/>
					</div>
				</div>
			</div>
			<div className={styles.workspaceSwitch} style={{paddingTop: '20px'}}>
				<SwitchButton
					textColorOff={colors.white}
					backgroundColorOn={colors.lightlightGrey}
					colorOn={workspaceValues.color}
					toggleSwitch={handleSwitchChange}
					textColorOn={colors.lightBlack}
					isIndicator={false}
					isOn={isSwitched}
					isLittle={false}
					width={calculatePixelSize(85, windowSize.width)}
					height="55px"
				/>
				<div style={{paddingTop: '20px'}}/>
				<div className={styles.workspaceSeparationLine}/>
			</div>
			<div style={{paddingLeft: '20px', paddingTop: '15px', paddingBottom: '10px'}}>
				<PText text='Automates :' font={fonts.openSans} color={colors.black} size="18px"/>
			</div>
			</div>
			<div style={{paddingLeft: '20px', paddingTop: '370px'}}>
				{workspaceValues.automates.map((automate, index) => {
					const isLastItem = index === workspaceValues.automates.length - 1;
					const paddingBottomStyle = isLastItem ? {paddingBottom: '20px'} : {paddingBottom: '20px'};
					return (
						<div key={index} style={paddingBottomStyle}>
							<IconButton alignLeft={true} textSize='17px' hoverBackgroundColor={adjustColorBrightness(colors.lightlightBlue, -10)} textColor="#233255" iconColor="#233255" buttonText={automate.name} isIcon={true} iconSrc="Command" backgroundColor={colors.lightlightBlue} width="95%" height="50px" borderRadius='15px' />
						</div>
					);
				})}
				<div style={{paddingBottom: '90px'}}>
					<IconButton textSize='17px' iconColor={colors.white} hoverBackgroundColor={adjustColorBrightness(colors.white, -10)} buttonText={"New automate"} isIcon={true} iconSrc="Plus" backgroundColor={colors.darkPurple} width="95%" height="50px" borderRadius='25px' textColor={colors.white}/>
				</div>
			</div>
			<BottomNavbar/>
		</div>
	);
};

Workspace.propTypes = {
  workspaceValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    access: PropTypes.string.isRequired,
    automates: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Workspace;
