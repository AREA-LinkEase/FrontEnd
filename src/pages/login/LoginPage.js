import React, {useEffect, useState} from "react";
import styles from "./LoginPage.module.css";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import IconButton from "../../components/buttons/IconButton";
import {svgs} from "../../style/svgs/svgList";
import { useLocation, useNavigate } from "react-router-dom/dist";
import Popup from "../../components/popup/Popup";
import callApi from "../../utils/callApi";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.isNew) {
            setIsOpenPopup(true);
        }
    }, [location.state]);

    const handleSignUpClick = () => {
        navigate("/register");
    };

    const handleClickButttonPopup = () => {
        setIsOpenPopup(false);
    };

    const handleClosePopup = () => {
        setIsOpenPopup(false);
    };

    //const handleConnect = () => {
      //  console.log("ICI");
        //callApi('/login', 'POST', {username: username, password: password});
    //};

    const handleLogin = async () => {
        navigate("/acceuil")
        const response = await callApi('/login', 'POST', { username, password });
        console.log(response);
    };

    return (
        <div className={styles.loginBody}>
            <div className={styles.loginContainer}>
                <div className={styles.loginInput}>
                    <PrimaryInput placeholder={"Username"} width={"85%"} inputValue={username} setInputValue={setUsername}/>
                    <PrimaryInput placeholder={"Password"} inputType={"Password"} leftIconName={"Lock"} width={"85%"} setInputValue={setPassword} inputValue={password} />
                </div>
                <PrimaryButton onPressButton={handleLogin} buttonText={"Login"} width={"95%"}/>
            </div>
            <div className={styles.loginSeparation}>
                <div className={styles.loginSeparationLine}></div>
                <p className={styles.loginSeparationText}>Or connect with</p>
                <div className={styles.loginSeparationLine}></div>
            </div>
            <div className={styles.loginSocialMedia}>
                <IconButton width={"90%"} marginBottomLeftIcon="20px"/>
                <IconButton width={"90%"} buttonText={"Microsoft"} marginBottomLeftIcon="20px" iconSrc={svgs.microsoft}/>
            </div>
            <div className={styles.loginSingUp}>
                <p className={styles.loginSingUpText}>Dont have an account?</p>
                <p onClick={handleSignUpClick} style={{cursor: 'pointer'}} className={styles.loginSingUpTextLink}>Sign Up</p>
            </div>
            { isOpenPopup && (
                <Popup onPress={handleClickButttonPopup} leavePopup={handleClosePopup} Title={`Welcome to LinkEase !`} Content={"Your account creation is successful"} TextButton="Continue" />
            )}
        </div>
    );
};

export default LoginPage;
