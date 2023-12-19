import React, {useState} from "react";
import PropTypes from 'prop-types';
import styles from "./ActionReactionAutomate.module.css";
import Header from "../../components/Header";
import PText from "../../components/texts/PText";
import { fonts } from "../../style/font/fonts";
import { fontWeights } from "../../style/font/fontWeights";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import { colors } from "../../style/color";
import BottomNavbar from "../../components/navbar/BottomNavbar";
import IconButton from "../../components/buttons/IconButton";
import SelectComponent from "../../components/selects/SelectComponent";
import {useNavigate} from "react-router-dom/dist";
import {putAutomate} from "../../models/automates";

const ActionReactionAutomate = ({id, automateName}) => {

    const [isOpenMenuTrigger, setIsOpenMenuTrigger] = useState(false);
    const [triggerValue, setTriggerValue] = useState('');
    const [selectedTriggerOption, setSelectedTriggerOption] = useState({id: -1, value: ''});

    const [isOpenMenuAction, setIsOpenMenuAction] = useState(false);
    const [actionValue, setActionValue] = useState('');
    const [selectedActionOption, setSelectedActionOption] = useState({id: -1, value: ''});

    const triggers = [
        {
            id: 1,
            value: "Quand j'écoute",
        },
        {
            id: 0,
            value: "Quand j'écoute pas",
        }
    ]

    const actions = [
        {
            id: 1,
            value: "Rajoute à la queue ...",
        },
        {
            id: 0,
            value: "Relancer la musique",
        }
    ]

    const areStatesNotEmpty = () => {
        return (
          selectedTriggerOption.id !== '' &&
          selectedActionOption.id !== ''
        );
      };

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate("/workspace");
    }

    const onSubmit = () => {
        let trigger = selectedTriggerOption.id
        let action = selectedActionOption.id
        let triggerOption = triggerValue
        let actionOption = actionValue

        putAutomate()
    }

	return (
		<div key={id} className={styles.actionReactionAutomateBody}>
            <div style={{paddingBottom: '15px'}}>
			<Header CenterChildrenComponent={() => <PText width="50%" font={fonts.openSans} fontWeight={fontWeights.bold} text={automateName} textAlign={true}/>} rightIconColor={colors.white} isRightIconClickable={false} isContentCenter={false} onClickIconLeft={handleBackClick}/>
            </div>
            <div className={styles.actionReactionAutomateContainer}>
                <div style={{paddingLeft: '20px', paddingTop: '15px', paddingBottom: '15px'}}>
                    <PText text="Trigger" font={fonts.openSans} fontWeight={fontWeights.bold} color="#233255" size="17px"/>
                </div>
                <div style={{paddingLeft: '20px', paddingBottom: '20px', width: '100%'}}>
                    <SelectComponent setSelectedOption={setSelectedTriggerOption} options={triggers} backgroundColor={colors.white} placeholder={(selectedTriggerOption.id !== '' && selectedTriggerOption.value !== '') ? selectedTriggerOption.value : "Select a trigger"} placeholderSize="15px" iconColor="#7C7C7C" borderColor={colors.lightlightGrey} borderWidth="1px" isOpenMenu={isOpenMenuTrigger} setIsOpenMenu={setIsOpenMenuTrigger} width="95%"/>
                </div>
                <div style={{paddingLeft: '20px', paddingTop: '15px', paddingBottom: '15px'}}>
                    <PText text="Trigger option" font={fonts.openSans} fontWeight={fontWeights.bold} color="#233255" size="17px"/>
                </div>
                <div style={{paddingLeft: '20px', paddingBottom: '20px'}}>
                    <PrimaryInput textColor="black" placeholderColor={colors.darkBlue} inputValue={triggerValue} setInputValue={setTriggerValue} width="88%"  borderRadius="15px" leftIconName='' fontWeight={fontWeights.normal} textFont={fonts.openSans} textSize="15px" backgroundColor={colors.white} borderColor={colors.lightlightGrey} placeholder="Write trigger option" height="20px"/>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '10px'}}>
                    <div className={styles.arrowDown}/>
                </div>
                
                <div style={{paddingLeft: '20px', paddingTop: '15px', paddingBottom: '15px'}}>
                    <PText text="Action" font={fonts.openSans} fontWeight={fontWeights.bold} color="#233255" size="17px"/>
                </div>
                <div style={{paddingLeft: '20px', paddingBottom: '20px', width: '100%'}}>
                    <SelectComponent setSelectedOption={setSelectedActionOption} options={actions} backgroundColor={colors.white} placeholder={(selectedActionOption.id !== '' && selectedActionOption.value !== '') ? selectedActionOption.value : "Select your action"} placeholderSize="15px" iconColor="#7C7C7C" borderColor={colors.lightlightGrey} borderWidth="1px" isOpenMenu={isOpenMenuAction} setIsOpenMenu={setIsOpenMenuAction} width="95%"/>
                </div>
                <div style={{paddingLeft: '20px', paddingTop: '15px', paddingBottom: '15px'}}>
                    <PText text="Action option" font={fonts.openSans} fontWeight={fontWeights.bold} color="#233255" size="17px"/>
                </div>
                <div style={{paddingLeft: '20px', paddingBottom: '20px'}}>
                    <PrimaryInput textColor="black" placeholderColor={colors.darkBlue} inputValue={actionValue} setInputValue={setActionValue} width="88%"  borderRadius="15px" leftIconName='' fontWeight={fontWeights.normal} textFont={fonts.openSans} textSize="15px" backgroundColor={colors.white} borderColor={colors.lightlightGrey} placeholder="Write your action option" height="20px"/>
                </div>
            </div>
            { areStatesNotEmpty() && (
                <div style={{position: 'fixed', bottom: 80, width: '100%', textAlign: 'center'}}>
                    <IconButton height="60px" buttonText='Save' width="90%" iconSrc='Plus' iconColor={colors.white} iconSize="30px" isIcon={true} isImage={false} backgroundColor={colors.darkPurple} textColor={colors.white} hoverBackgroundColor={colors.darkPurple} onPressButton={onSubmit} />
                </div>
            )}
            <BottomNavbar itemPosition={"Workspace"}/>
		</div>
	);
};

ActionReactionAutomate.propTypes = {
	id: PropTypes.string,
    automateName: PropTypes.string,
};

export default ActionReactionAutomate;
