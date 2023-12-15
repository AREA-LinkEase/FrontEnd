import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./WorkspaceEdit.module.css";
import Header from "../../components/Header";
import { colors } from "../../style/color";
import PText from "../../components/texts/PText";
import { fontWeights } from "../../style/font/fontWeights";
import { fonts } from "../../style/font/fonts";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import BottomNavbar from "../../components/navbar/BottomNavbar";

const WorkspaceEdit = ({id, name, description}) => {
    const [nameValue, setNameValue] = useState(name);
    const [descriptionValue, setDescriptionValue] = useState(description);
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const handleClickDelete = () => {
        console.log("Clicked on deleted workspace");
        setIsOpenPopup(!isOpenPopup);
    };

	return (
		<div key={id} className={styles.workspaceBody}>
			<Header rightIconColor={colors.white} leftIconSize="30px"/>
            <div style={{paddingLeft: '20px', paddingRight: '20px', width: '100%'}}>
                <div style={{paddingBottom: '60px'}}>
                    <PText text='Workspace parameters' fontWeight={fontWeights.bold} font={fonts.openSans} color={colors.lightBlack} size="21px"/>
                </div>
                <div style={{paddingBottom: '20px'}}>
                    <PText text='Edit the name :' font={fonts.openSans} color={colors.lightBlack} size="17px"/>
                </div>
                <div style={{paddingBottom: '60px'}}>
                    <PrimaryInput width="90%" leftIconName='' fontWeight={fontWeights.normal} placeholder="Name" inputType="text" textSize="15px" inputValue={nameValue} setInputValue={setNameValue}/>
                </div>
                <div style={{paddingBottom: '20px'}}>
                    <PText text='Edit the description:' font={fonts.openSans} color={colors.lightBlack} size="17px"/>
                </div>
                <div style={{paddingBottom: '100px'}}>
                    <PrimaryInput width="90%" leftIconName='' isTextArea={true} placeholder="Description..." rows={8} fontWeight={fontWeights.normal} inputType="text" textSize="15px" inputValue={descriptionValue} setInputValue={setDescriptionValue}/>
                </div>
                <div style={{width: "91%", textAlign: 'center'}}>
                    <div
                        onClick={handleClickDelete}
                        style={{cursor: 'pointer', display: 'inline-block'}}>
                        <PText text='Delete the workspace' font={fonts.openSans} color='red' fontWeight={fontWeights.bold} size="15px"/>
                    </div>
                </div>
                <BottomNavbar/>
            </div>
		</div>
	);
};

WorkspaceEdit.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
};

export default WorkspaceEdit;
