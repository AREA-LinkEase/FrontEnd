import PropTypes from "prop-types";
import * as Icon from 'react-feather';
import React, {useState} from "react";
import {colors} from "../../style/color";
import styles from "./Service.module.css";
import Header from "../../components/Header";
import H1Text from "../../components/texts/H1Text";
import BottomNavbar from "../../components/navbar/BottomNavbar";
import SwitchButton from "../../components/switches/SwitchButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import adjustColorBrightness from "../../utils/adjustColorBrightness";
import TitleTextChildButton from "../../components/buttons/TitleTextChildButton";


const Service = ({
    color = "gray",
    title = "Service",
    logo = "https://via.placeholder.com/71",
    description = "Description du service je suis la description du service et je raconte que fait ce service et aussi comment il peut ettre utilise dans linkease"
                 }) => {

    const [showIcon, setShowIcon] = useState(false);
    const Settings = Icon['Settings'];
    const handleClick = () => {
        setShowIcon(!showIcon);
    };

    const [BoxAccessValue, setBoxAccessValue] = useState("All");
    const [boxList] = useState([{
        name: 'SpotifyBangar',
        creator: 'Adilou le fifou',
        people: 3500000,
        color: colors.lightPurple,
        access: "Automate"
    },
        {
            name: 'Baboss',
            creator: 'Adilou le fifou',
            people: 3500000,
            color: colors.darkGrey,
            access: "Private"
        },
        {
            name: 'Mamen',
            creator: 'Adilou le fifou',
            people: 3500000,
            color: colors.lightPurple,
            access: "Automate"
        },
        {
            name: '3ataï',
            creator: 'Adilou le fifou',
            people: 3500000,
            color: colors.lightlightGrey,
            access: "Automate"
        },
        {
            name: 'THOAAAAMS',
            creator: 'Adilou le fifou',
            people: 3500000,
            color: colors.purple,
            access: "Workspace"
        },
        {
            name: 'PIZZA BIEN GARNIE',
            creator: 'Adilou le fifou',
            people: 3500000,
            color: colors.purple,
            access: "Workspace"
        }]);

  return (
    <div>
        <div style={{
            background: color,
            height: "318px",
            position: 'fixed',
            zIndex: 2000, top: '0',
            width: '100%'
        }}>
            <div className={styles.serviceBackground}>
                <img src={logo} alt="logo" />
                {showIcon &&
                    <div
                    style={{cursor: 'pointer',
                        marginLeft: 'auto',
                        marginRight: '-12px',
                        zIndex: "3000",
                        position: "fixed",
                        top: "57px",
                        left: "87%"
                    }}>
                    {React.createElement(Settings, {
                        size: '24px',
                        color: colors.white,
                    })}
                </div>}
                <H1Text text={title} size={"24px"}/>
                <p className={styles.serviceDescription}>{description}</p>
                <PrimaryButton
                    buttonText={"Connect"}
                    textSize={"15px"}
                    backgroundColor={"white"}
                    hoverBackgroundColor={"#CFCFCF"}
                    width={"35%"} height={"42px"}
                    borderColor={"gray"}
                    textColor={"black"}
                    onPressButton={handleClick}
                />
            </div>
        </div>
        <div className={styles.serviceFilter}>
            <Header isFilter={true}
                    filterListTag={["All", "Workspace", "Automate"]}
                    filterSelected={BoxAccessValue}
                    setFilterSelected={setBoxAccessValue}
            />
        </div>
            <div
                className={styles.serviceContainer}
                style={{ marginTop: '85px', paddingTop: '295px'}}
            >
                {boxList.length !== 0 ? (
                    <div className={styles.serviceList}>
                        {boxList
                            .filter(
                                (box) =>
                                    BoxAccessValue === "All" ||
                                    box.access
                                        .toLowerCase()
                                        .includes(BoxAccessValue.toLowerCase())
                            )
                            .map((box, index, filteredList) => (
                                <div
                                    key={index}
                                    style={{
                                        paddingBottom:
                                            index === filteredList.length - 1 ? '90px' : '15px',
                                    }}
                                >
                                    <TitleTextChildButton
                                        title={box.name}
                                        text={`Par **${box.creator}**`}
                                        isSelectable={false}
                                        componentId={index}
                                        isClickable={true}
                                        backgroundColor={box.access === 'Public' ? box.color : '#777777'}
                                        borderColor={box.access === 'Public' ? box.color : '#777777'}
                                        width="90%"
                                        ComponentChildren={() => (
                                            <SwitchButton
                                                textColorOff={colors.white}
                                                backgroundColorOn={adjustColorBrightness(box.color, -50)}
                                                colorOn={box.color}
                                                textColorOn={colors.white}
                                                isOn={box.access!=="Private"}
                                                isLittle={true}
                                                width="120px"
                                                height="20px"
                                            />
                                        )}
                                    />
                                </div>
                            ))}
                    </div>
                ) : null}
            </div>
        <BottomNavbar />
    </div>
  );
}

Service.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    logo: PropTypes.string,
    description: PropTypes.string
}

export default Service;