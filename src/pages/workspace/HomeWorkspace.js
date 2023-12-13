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
import PrimaryButton from "../../components/buttons/primaryButton";
import IconButton from "../../components/buttons/IconButton";

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

	const [nameValue, setNameValue] = useState("");
	const [workspaceSearchValue, setWorkspaceSearchValue] = useState("");
	const [workspaceList, setWorkspaceList] = useState([{
		name: 'SpotifyBangar',
		creator: 'Adilou le fifou',
		people: 3500000
	},
	{
		name: 'Baboss',
		creator: 'Adilou le fifou',
		people: 3500000
	},
	{
		name: 'Mamen',
		creator: 'Adilou le fifou',
		people: 3500
	},
	{
		name: '3ataï',
		creator: 'Adilou le fifou',
		people: 3500000
	},
	{
		name: 'THOAAAAMS',
		creator: 'Adilou le fifou',
		people: 3500000
	},
	{
		name: 'PIZZA BIEN GARNIE',
		creator: 'Adilou le fifou',
		people: 3500000
	}]);

  const [selectedWorkspaces, setSelectedWorkspaces] = useState([]);

  const handleSelect = (index) => {
    const isSelected = selectedWorkspaces.includes(index);

    if (isSelected) {
      setSelectedWorkspaces(selectedWorkspaces.filter((item) => item !== index));
    } else {
      setSelectedWorkspaces([...selectedWorkspaces, index]);
    }
  };

	return (
		<div className={styles.homeWorkspaceBody}>
			<div>
				<Header rightIconName=''/>
			</div>
			<div className={styles.homeWorkspaceContainer}>
				<div className={styles.homeWorkspaceTitle}>
					<PText text='New Workspace' font={fonts.openSans} fontWeight={fontWeights.bold} size="30px"/>
				</div>
				<div className={styles.homeWorkspaceInput}>
					<PrimaryInput leftIconName='' placeholder='Name' inputValue={nameValue} setInputValue={setNameValue} width="85%"/>
				</div>
				<div className={styles.homeWorkspaceSeparationLine}></div>
				<div className={styles.homeWorkspaceInputWorkspace}>
					<PrimaryInput leftIconName='Search' placeholder='Workspace search...' inputValue={workspaceSearchValue} setInputValue={setWorkspaceSearchValue} width="85%"/>
				</div>
					{workspaceList.length !== 0 ? (
						<div className={styles.homeWorkspaceList}>
							{workspaceList
								.filter(workspace => workspace.name.toLowerCase().includes(workspaceSearchValue.toLowerCase()))
								.map((workspace, index) => (
									<div key={index} style={{ paddingBottom: index === workspaceList.length - 1 ? ((selectedWorkspaces.length !== 0 || nameValue !== "") ? '170px' : '90px') : '15px' }}>
										<TitleTextChildButton
											title={workspace.name}
											text={`Par **${workspace.creator}**`}
											isSelectable={true}
											componentId={index}
											isClickable={false}
											handleSelect={handleSelect}
											width="85%"
											ComponentChildren={() => <NumberPeople numberPeople={workspace.people} />}
										/>
									</div>
								))}
						</div>
						) : null
					}
					{ (selectedWorkspaces.length !== 0 || nameValue !== "") && (
						<div style={{position: 'fixed', bottom: 80}}>
							<IconButton height="70px" buttonText='Add' iconSrc='Plus' iconColor={colors.white} iconSize="30px" isIcon={true} isImage={false} backgroundColor={colors.darkPurple} textColor={colors.white} hoverBackgroundColor={colors.darkPurple} />
						</div>
					)}
				<div>
					<BottomNavbar/>
				</div>
			</div>
		</div>
	);
};

export default HomeWorkspace;
