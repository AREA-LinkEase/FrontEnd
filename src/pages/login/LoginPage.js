import React, {useState} from "react";
import styles from "./LoginPage.module.css";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import IconButton from "../../components/buttons/IconButton";
import {svgs} from "../../style/svgs/svgList";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className={styles.loginBody}>
            <div className={styles.loginContainer}>
                <div className={styles.loginInput}>
                    <PrimaryInput placeholder={"Username"} width={"85%"} inputValue={username} setInputValue={setUsername}/>
                    <PrimaryInput placeholder={"Password"} inputType={"Password"} leftIconName={"Lock"} width={"85%"} setInputValue={setPassword} inputValue={password} />
                </div>
                <PrimaryButton buttonText={"Login"} width={"95%"}/>
            </div>
            <div className={styles.loginSeparation}>
                <div className={styles.loginSeparationLine}></div>
                <p className={styles.loginSeparationText}>Or connect with</p>
                <div className={styles.loginSeparationLine}></div>
            </div>
            <div className={styles.loginSocialMedia}>
                <IconButton width={"90%"}/>
                <IconButton width={"90%"} buttonText={"Microsoft"} iconSrc={svgs.microsoft}/>
            </div>
            <div className={styles.loginSingUp}>
                <p className={styles.loginSingUpText}>Dont have an account?</p>
                <p className={styles.loginSingUpTextLink}>Sign Up</p>
            </div>
        </div>
    );
};

export default LoginPage;
