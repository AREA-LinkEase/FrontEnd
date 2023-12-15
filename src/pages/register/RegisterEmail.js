import React, {useState} from "react";
import PropTypes from "prop-types";
import "./RegisterEmail.css"
import Header from "../../components/Header";
import H1Text from "../../components/texts/H1Text";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const RegisterEmail = ({
    Title = "Quel est ton email ?",
    InputPlaceholder = "Email",
    leftIconSrc = "User",
    rightIconSrc = "",
    ButtonText = "Continuer",
                       }) => {
    const [input, setInput] = useState("");
    return (
        <div className={"registerEmailBody"}>
            <Header rightIconName={""}/>
            <div className={"registerTitle"}>
                <H1Text text={Title} fontWeight={"550"} size={"38px"}/>
            </div>
            <div className={"registerInput"}>
                <PrimaryInput placeholder={InputPlaceholder} leftIconName={leftIconSrc} setInputValue={input} inputValue={setInput} width={"80%"} rightIconName={rightIconSrc}/>
            </div>
            <div className={"registerButton"}>
                <PrimaryButton buttonText={ButtonText} width={"90%"}/>
            </div>
        </div>
    );
}

RegisterEmail.propTypes = {
    Title: PropTypes.string,
    InputPlaceholder: PropTypes.string,
    leftIconSrc: PropTypes.string,
    ButtonText: PropTypes.string,
    rightIconSrc: PropTypes.string,
};

export default RegisterEmail;