import React, {useState} from "react";
import "./LoginPage.css";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import PrimaryButton from "../../components/buttons/primaryButton";
import IconButton from "../../components/buttons/IconButton";
import {svgs} from "../../style/svgs/svgList";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className={"loginBody"}>
            <div className={"loginContainer"}>
                <div className={"loginInput"}>
                    <PrimaryInput placeholder={"Username"} width={"85%"} inputValue={username} setInputValue={setUsername}/>
                    <PrimaryInput placeholder={"Password"} inputType={"Password"} leftIconName={"Lock"} width={"85%"} setInputValue={setPassword} inputValue={password} />
                </div>
                <PrimaryButton buttonText={"Login"} width={"95%"}/>
            </div>
            <div className={"loginSeparation"}>
                <div className={"loginSeparationLine"}></div>
                <p className={"loginSeparationText"}>Or connect with</p>
                <div className={"loginSeparationLine"}></div>
            </div>
            <div className={"loginSocialMedia"}>
                <IconButton width={"90%"}/>
                <IconButton width={"90%"} buttonText={"Microsoft"} iconSrc={svgs.microsoft}/>
            </div>
            <div className={"loginSingUp"}>
                <p className={"loginSingUpText"}>Don't have an account?</p>
                <p className={"loginSingUpTextLink"}>Sign Up</p>
            </div>
        </div>
    );
};

export default LoginPage;
