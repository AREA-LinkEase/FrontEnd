import React, {useState} from "react";
import PropTypes from "prop-types";
import styles from "./Register.module.css";
import Header from "../../components/Header";
import H1Text from "../../components/texts/H1Text";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import {colors} from "../../style/color";

const Register = ({
    Title = "Quel est ton email ?",
    InputPlaceholder = "No place holder",
    leftIconSrc = "",
    rightIconSrcOn = "",
    rightIconSrcOff = "",
    ButtonText = "no text",
    inputType = "email",
    }) => {
    const [inputValue, setInputValue] = useState('');
    const [isActive, setIsActive] = useState(inputType !== 'password');
    const onPressRightIcon = (value) => {
        setIsActive(!value);
    }

    const rightIconName =
        inputType === "email" ? "" : isActive ? rightIconSrcOn : rightIconSrcOff;

    return (
        <div className={styles.registerEmailBody}>
            <Header rightIconName={""}/>
            <div className={styles.registerTitle}>
                <H1Text text={Title} fontWeight={"550"} size={"38px"} color={colors.black}/>
            </div>
            <div className={styles.registerInput}>
                <PrimaryInput rightIconName={rightIconName} inputType={isActive ? 'email' : 'password'} isRightIconIsActive={isActive} onPressRightIcon={onPressRightIcon} inputValue={inputValue} setInputValue={setInputValue} placeholder={InputPlaceholder} leftIconName={leftIconSrc} />
            </div>
            <div className={styles.registerButton}>
                <PrimaryButton buttonText={ButtonText} width={"90%"}/>
            </div>
        </div>
    );
}

Register.propTypes = {
    Title: PropTypes.string,
    InputPlaceholder: PropTypes.string,
    leftIconSrc: PropTypes.string,
    ButtonText: PropTypes.string,
    rightIconSrcOn: PropTypes.string,
    rightIconSrcOff: PropTypes.string,
    inputType: PropTypes.string,
};

export default Register;