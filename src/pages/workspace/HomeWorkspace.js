import React, {useEffect, useState} from "react";
import styles from "./HomeWorkspace.module.css";
import Header from "../../components/Header";
import PText from "../../components/texts/PText";
import { fonts } from "../../style/font/fonts";
import { fontWeights } from "../../style/font/fontWeights";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import TitleTextChildButton from "../../components/buttons/TitleTextChildButton";
import BasicText from "../../components/texts/BasicText";
import * as Icon from 'react-feather';
import { colors } from "../../style/color";
import { formatNumber } from "../../utils/formatNumber";
import BottomNavbar from "../../components/navbar/BottomNavbar";
import SwitchButton from "../../components/switches/SwitchButton";
import adjustColorBrightness from "../../utils/adjustColorBrightness";

const NumberPeople = ({numberPeople}) => {

	const IconLogo = Icon["User"];

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center'
		}}>
			<div style={{paddingRight: '10px'}}>
				<IconLogo color={colors.white}/>
			</div>
			<div>
				<BasicText text={formatNumber(numberPeople)} color={colors.white}/>
			</div>
		</div>
	)
}

const HomeWorkspace = () => {
	
	const [workspaceAccessValue, setWorkspaceAccessValue] = useState("All");
	const [workspaceList, setWorkspaceList] = useState([{
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
    <div className={styles.homeWorkspaceBody}>
      <div style={{ paddingLeft: '4%', position: 'fixed', width: '100%', zIndex: 1000 }}>
        <Header
          isFilter={true}
					isNumberInfo={true}
          filterSelected={workspaceAccessValue}
          setFilterSelected={setWorkspaceAccessValue}
					numberItems={numberItems}
        />
      </div>
      <div
        className={styles.homeWorkspaceContainer}
        style={{ marginTop: '80px'}}
      >
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
                    backgroundColor={workspace.color}
                    borderColor={workspace.color}
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
        <div>
          <BottomNavbar />
        </div>
      </div>
    </div>
  );
};

export default HomeWorkspace;
