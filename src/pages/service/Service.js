import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import styles from "./Service.module.css";
import Header from "../../components/Header";
import H1Text from "../../components/texts/H1Text";
import BottomNavbar from "../../components/navbar/BottomNavbar";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import {colors} from "../../style/color";
import TitleTextChildButton from "../../components/buttons/TitleTextChildButton";
import SwitchButton from "../../components/switches/SwitchButton";
import adjustColorBrightness from "../../utils/adjustColorBrightness";


const Service = ({
    color = "gray",
    title = "Service",
    logo = "https://via.placeholder.com/71",
    description = "Description du service je suis la description du service et je raconte que fait ce service et aussi comment il peut ettre utilise dans linkease"
                 }) => {
    const [workspaceAccessValue, setWorkspaceAccessValue] = useState("All");
    const [workspaceList] = useState([{
        name: 'SpotifyBangar',
        creator: 'Adilou le fifou',
        people: 3500000,
        color: colors.lightPurple,
        access: "Public"
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
            access: "Public"
        },
        {
            name: '3ataï',
            creator: 'Adilou le fifou',
            people: 3500000,
            color: colors.lightlightGrey,
            access: "Public"
        },
        {
            name: 'THOAAAAMS',
            creator: 'Adilou le fifou',
            people: 3500000,
            color: colors.purple,
            access: "Public"
        },
        {
            name: 'PIZZA BIEN GARNIE',
            creator: 'Adilou le fifou',
            people: 3500000,
            color: colors.purple,
            access: "Private"
        }]);

    const [numberItems, setNumberItems] = useState({
        "All": 0,
        "Private": 0,
        "Public": 0,
    });

    useEffect(() => {
        const countWorkspaceTypes = () => {
            const counts = {
                "All": 0,
                "Private": 0,
                "Public": 0,
            };

            workspaceList.forEach((workspace) => {
                counts.All += 1;
                counts[workspace.access] += 1;
            });

            setNumberItems(counts);
        }
        countWorkspaceTypes();
    }, [workspaceList]);
  return (
    <div>
        <div style={{background: color, height: "318px"}}>
            <div className={styles.serviceBackground}>
                <img src={logo} alt="logo" />
                <H1Text text={title} size={"24px"}/>
                <p className={styles.serviceDescription}>{description}</p>
                <PrimaryButton text="Connect" backgroundColor={"white"} hoverBackgroundColor={"gray"} width={"45%"} height={"42px"}/>
            </div>
        </div>
        <div className={styles.serviceFilter}>
            <Header isFilter={true} filterListTag={["All", "Workspace", "Automate"]} />
        </div>
        <div className={styles.serviceList}>
            {workspaceList.length !== 0 ? (
                <div className={styles.homeWorkspaceList}>
                    {workspaceList
                        .filter(
                            (workspace) =>
                                workspaceAccessValue === "All" ||
                                workspace.access
                                    .toLowerCase()
                                    .includes(workspaceAccessValue.toLowerCase())
                        )
                        .map((workspace, index, filteredList) => (
                            <div
                                key={index}
                                style={{
                                    paddingBottom:
                                        index === filteredList.length - 1 ? '90px' : '15px',
                                }}
                            >
                                <TitleTextChildButton
                                    title={workspace.name}
                                    text={`Par **${workspace.creator}**`}
                                    isSelectable={false}
                                    componentId={index}
                                    isClickable={true}
                                    backgroundColor={workspace.access === 'Public' ? workspace.color : '#777777'}
                                    borderColor={workspace.access === 'Public' ? workspace.color : '#777777'}
                                    width="90%"
                                    ComponentChildren={() => (
                                        <SwitchButton
                                            textColorOff={colors.white}
                                            backgroundColorOn={adjustColorBrightness(workspace.color, -50)}
                                            colorOn={workspace.color}
                                            textColorOn={colors.white}
                                            isOn={workspace.access === "Private" ? false : true}
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