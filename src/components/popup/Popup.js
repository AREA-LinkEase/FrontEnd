import React from "react";
import "./Popup.css";
import PropTypes from "prop-types";
import PrimaryButton from "../buttons/PrimaryButton";
import H1Text from "../texts/H1Text";
import PText from "../texts/PText";
import {colors} from "../../style/color";

const Modal = ({
                   Title = "Title",
                   Content = "Content",
                   TextButton = "TextButton",
                   state = false,
                   onPress = "",
               }) => {
    return (
        <div className={"popupBody"}>
            {state && (
                <div onClick={state} className="popupOverlay">
                    <div className="popupContent">
                        <H1Text text={Title} size={"30px"} color={colors.black}/>
                        <div className={"popupText"}>
                            <PText text={Content} size={"15px"}/>
                        </div>
                        <div className="popupButton">
                            <PrimaryButton buttonText={TextButton} width={"300%"} textSize={"80%"} height={"47px"} onPressButton={onPress}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

Modal.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    TextButton: PropTypes.string,
    state: PropTypes.bool,
    onPress: PropTypes.string,
};

export default Modal;
