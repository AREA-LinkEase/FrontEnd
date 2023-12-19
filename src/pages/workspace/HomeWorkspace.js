import React, {useEffect, useState} from "react";
import styles from "./HomeWorkspace.module.css";
import Header from "../../components/Header";
import TitleTextChildButton from "../../components/buttons/TitleTextChildButton";
import { colors } from "../../style/color";
import BottomNavbar from "../../components/navbar/BottomNavbar";
import SwitchButton from "../../components/switches/SwitchButton";
import adjustColorBrightness from "../../utils/adjustColorBrightness";
import {useNavigate} from "react-router-dom";
import { getWorkspaces } from "../../models/workspaces";
import Popup from "../../components/popup/Popup";


const HomeWorkspace = () => {
	
	const [workspaceAccessValue, setWorkspaceAccessValue] = useState("All");
  const [isError, setIsError] = useState(false);
  const [workspaces, setWorkspaces] = useState([{}]);
	// const [workspaceList] = useState([{
	// 	name: 'SpotifyBangar',
	// 	creator: 'Adilou le fifou',
	// 	people: 3500000,
	// 	color: colors.lightPurple,
	// 	access: "Public"
	// },
	// {
	// 	name: 'Baboss',
	// 	creator: 'Adilou le fifou',
	// 	people: 3500000,
	// 	color: colors.darkGrey,
	// 	access: "Private"
	// },
	// {
	// 	name: 'Mamen',
	// 	creator: 'Adilou le fifou',
	// 	people: 3500000,
	// 	color: colors.lightPurple,
	// 	access: "Public"
	// },
	// {
	// 	name: '3ataï',
	// 	creator: 'Adilou le fifou',
	// 	people: 3500000,
	// 	color: colors.lightlightGrey,
	// 	access: "Public"
	// },
	// {
	// 	name: 'THOAAAAMS',
	// 	creator: 'Adilou le fifou',
	// 	people: 3500000,
	// 	color: colors.lightGrey,
	// 	access: "Public"
	// },
	// {
	// 	name: 'PIZZA BIEN GARNIE',
	// 	creator: 'Adilou le fifou',
	// 	people: 3500000,
	// 	color: colors.lightPurple,
	// 	access: "Private"
	// }]);

	const [numberItems, setNumberItems] = useState({
    "All": 0,
    "Private": 0,
    "Public": 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWorkspaces();
        console.log(response);
        if (response.status === 200) {
          setWorkspaces(response.content.result);
        } else {
          setIsError(true);
        }
      } catch (error) {
          console.error("Error fetching workspaces:", error);
      }
    };

    fetchData();
  }, []);

	useEffect(() => {
		const countWorkspaceTypes = () => {
			const counts = {
        "All": 0,
        "Private": 0,
        "Public": 0,
      };

      workspaces.forEach((workspace) => {
        counts.All += 1;
        counts[workspace.is_private ? "Private" : "Public"] += 1;
      });

      setNumberItems(counts);
		}
		countWorkspaceTypes();
	}, [workspaces]);

	const navigate = useNavigate();

	const handleItemClick = () => {
		navigate("/workspace");
	}

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
        {workspaces.length !== 0 ? (
          <div className={styles.homeWorkspaceList}>
            {workspaces
              .filter((workspace) =>
              workspaceAccessValue === "All"
                ? true
                : workspaceAccessValue === "Private"
                ? workspace.is_private
                : !workspace.is_private
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
                    title={workspace.title}
                    text={`Par **${workspace.creator}**`}
                    isSelectable={false}
                    componentId={index}
                    isClickable={true}
					          onPressButton={handleItemClick}
                    backgroundColor={workspace.enabled === true ? colors.lightPurple : '#777777'}
                    borderColor={workspace.enabled === true ? colors.lightPurple : '#777777'}
                    width="90%"
                    ComponentChildren={() => (
                      <SwitchButton
                        textColorOff={colors.white}
                        backgroundColorOn={adjustColorBrightness(colors.lightPurple, -50)}
                        colorOn={colors.lightPurple}
                        textColorOn={colors.white}
                        isOn={workspace.access !== workspace.is_private}
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
          <BottomNavbar itemPosition={"Workspace"} isPopupVisible={isError}/>
        </div>
      </div>
      { isError && (
        <Popup onPress={handleClickButttonPopup} leavePopup={handleClosePopup} Title={'Error'} Content={'Error'} TextButton="Continue" />
      )}
    </div>
  );
};

export default HomeWorkspace;
