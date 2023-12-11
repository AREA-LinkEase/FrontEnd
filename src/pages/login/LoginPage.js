import React from "react";
import "./LoginPage.css";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import PrimaryButton from "../../components/buttons/primaryButton";

const LoginPage = () => {
    return (
        <div className={"loginBody"}>
            <div className={"loginContainer"}>
                <div className={"loginInput"}>
                    <PrimaryInput placeholder={"Username"} />
                    <PrimaryInput placeholder={"Password"} leftIconName={"Lock"}/>

                </div>
                <PrimaryButton buttonText={"Login"} width={"95%"}/>
            </div>
            <div className={"loginSeparation"}>
                <div className={"loginSeparationLine"}></div>
                <div className={"loginSeparationText"}>Or connect with</div>
                <div className={"loginSeparationLine"}></div>
            </div>

        </div>
    );
};

export default LoginPage;
