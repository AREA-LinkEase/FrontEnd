import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./WorkspaceEditUsers.module.css";
import Header from "../../components/Header";
import { colors } from "../../style/color";
import PText from "../../components/texts/PText";
import { fontWeights } from "../../style/font/fontWeights";
import { fonts } from "../../style/font/fonts";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import BottomNavbar from "../../components/navbar/BottomNavbar";
import Popup from "../../components/popup/Popup";
import IconButton from "../../components/buttons/IconButton";
import adjustColorBrightness from "../../utils/adjustColorBrightness";
import ScrollLock from 'react-scrolllock';

const WorkspaceEditUsers = ({workspaceId, users}) => {
    const [nameValue, setNameValue] = useState('');
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [userSelect, setUserSelect] = useState({id: '', name: ''});

    const handleNameChange = (newValue) => {
        setNameValue(newValue);
    };

    const handleClickDeleteUser = (user) => {
        setUserSelect(user);
        setIsOpenPopup(true);
    };

    const handleClickDeleteButttonPopup = (id) => {
        console.log("Clicked on button delete user");
        console.log(id);
        setIsOpenPopup(false);
    };

    const handleClosePopup = () => {
        console.log(`Workspace id : ${workspaceId}`);
        console.log("Clicked on screen to close popup");
        setIsOpenPopup(false);
    };

    return (
        <div className={styles.workspaceEditUsersBody}>
            <div style={{paddingLeft: '20px', width: '100%', paddingTop: nameValue !== '' ? '380px' : '330px'}}>
                {users.map((user, index) => {
                    const isLastItem = index === users.length - 1;
                    const paddingBottomStyle = isLastItem ? {paddingBottom: '80px'} : {paddingBottom: '20px'};
                    return (
                        <div key={index} style={paddingBottomStyle}>
                            <IconButton onPressRightIcon={() => {handleClickDeleteUser(user)}} isRightIconClickable={true} isButtonClickable={false} rightIconName='Trash2' alignLeft={true} textSize='17px' hoverBackgroundColor={adjustColorBrightness(colors.lightlightBlue, -10)} textColor="#808DA3" iconColor="#233255" buttonText={user.name} isIcon={true} iconSrc="User" backgroundColor={colors.lightlightBlue} width="95%" height="50px" borderRadius='15px' />
                        </div>
                    );
                })}
            </div>
            <div style={{width: '100%', position: 'fixed', backgroundColor: colors.white}}>
                <Header rightIconColor={colors.black} leftIconSize="30px" rightIconName=""/>
                <div style={{paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px'}}>
                    <PText text='Users management' fontWeight={fontWeights.bold} font={fonts.openSans} color={colors.lightBlack} size="21px"/>
                </div>
                <div style={{paddingBottom: '20px', paddingLeft: '20px'}}>
                    <PText text='Add new user:' font={fonts.openSans} color={colors.lightBlack} size="17px"/>
                </div>
                <div style={{paddingBottom: '20px', paddingLeft: '20px'}}>
                    <PrimaryInput width="90%" leftIconName='' fontWeight={fontWeights.normal} placeholder="Name" inputType="text" textSize="15px" inputValue={nameValue} setInputValue={handleNameChange}/>
                </div>
                { nameValue !== '' && (
                    <div style={{width: '100%', textAlign: 'center', display: 'flex', justifyContent:"center", margin: "0 auto"}}>
                        <IconButton width="90%" height="45px" buttonText='Add' iconSrc='' backgroundColor={colors.darkPurple} textColor={colors.white} hoverBackgroundColor={colors.darkPurple} />
                    </div>
                )}
                <div style={{paddingTop: '15px'}}/>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className={styles.workspaceEditUsersSeparationLine} />
                </div>
            </div>
            { isOpenPopup && (
                <div>
                    <ScrollLock />
                    <Popup onPress={() => {handleClickDeleteButttonPopup(userSelect.id)}} leavePopup={handleClosePopup} Title={`Are you sure to eject ${userSelect.name} ?!`} Content="The user will no longer have access to this workspace." TextButton="Confirm" />
                </div>
            )}
            <BottomNavbar isPopupVisible={isOpenPopup}/>
        </div>
    );
};

WorkspaceEditUsers.propTypes = {
    workspaceId: PropTypes.string,
    users: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
};

export default WorkspaceEditUsers;
