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

const ActionReactionAutomate = ({id, automateName}) => {

    const [isOpenMenuTrigger, setIsOpenMenuTrigger] = useState(false);
    const [triggerValue, setTriggerValue] = useState('');
    const [selectedTriggerOption, setSelectedTriggerOption] = useState({id: '', value: ''});

    const [isOpenMenuAction, setIsOpenMenuAction] = useState(false);
    const [actionValue, setActionValue] = useState('');
    const [selectedActionOption, setSelectedActionOption] = useState({id: '', value: ''});

    const triggers = [
        {
            id: '1',
            value: "Quand j'écoute l'album de ...",
        },
        {
            id: '2',
            value: "Quand je coupe la musique ...",
        },
        {
            id: '3',
            value: "Quand je lance la musique ...",
        },
        {
            id: '4',
            value: "Chaque trois musiques de ...",
        },
        {
            id: '5',
            value: "Au bout de 50 minutes écoutés du chanteur ...",
        },
        {
            id: '6',
            value: "Quand il y'a la musique gamberge de Gazo ...",
        }
    ]

    const actions = [
        {
            id: '1',
            value: "Met la musique de ...",
        }
    ]

    const areStatesNotEmpty = () => {
        return (
          selectedTriggerOption.id !== '' &&
          triggerValue !== '' &&
          selectedActionOption.id !== '' &&
          actionValue !== ''
        );
      };

	return (
		<div key={id} className={styles.actionReactionAutomateBody}>
            <div style={{paddingBottom: '15px'}}>
			<Header CenterChildrenComponent={() => <PText width="50%" font={fonts.openSans} fontWeight={fontWeights.bold} text={automateName} textAlign={true}/>} rightIconColor={colors.white} isRightIconClickable={false} onClickIconRight={() => {}} isContentCenter={false}/>
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
                    <IconButton height="60px" buttonText='Save' width="90%" iconSrc='Plus' iconColor={colors.white} iconSize="30px" isIcon={true} isImage={false} backgroundColor={colors.darkPurple} textColor={colors.white} hoverBackgroundColor={colors.darkPurple} />
                </div>
            )}
            <BottomNavbar/>
		</div>
	);
};

ActionReactionAutomate.propTypes = {
	id: PropTypes.string,
    automateName: PropTypes.string,
};

export default ActionReactionAutomate;
