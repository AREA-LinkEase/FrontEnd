import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Icon from "react-feather";
import {colors} from "../../style/color";
import styles from "./ServiceSetting.module.css";
import H1Text from "../../components/texts/H1Text";
import BottomNavbar from "../../components/navbar/BottomNavbar";
import Popup from "../../components/popup/Popup";

const ServiceSetting = ({
                     color = "gray",
                     title = "Service",
                     logo = "https://via.placeholder.com/71",
                     userName = "no name"
                 }) => {

        const [isOpenPopup, setIsOpenPopup] = useState(false);
        const Settings = Icon['ChevronLeft'];

        
    const handleClickDeleteUser = (id) => {
        console.log(id);
        setIsOpenPopup(true);
    };

    const handleClickDeleteButttonPopup = (id) => {
        console.log("Clicked on button delete user");
        console.log(id);
        setIsOpenPopup(false);
    };

    const handleClosePopup = () => {
        console.log("Clicked on screen to close popup");
        setIsOpenPopup(false);
    };

    return (
        <div>
            <div style={{
                background: color,
                height: "318px",
                position: 'fixed',
                top: '0',
                width: '100%'
            }}>
                <div className={styles.serviceBackground}>
                    <div
                        style={{cursor: 'pointer',
                            marginLeft: 'auto',
                            marginRight: '-12px',
                            position: "fixed",
                            top: "55px",
                            right: "95%"
                        }}>
                        {React.createElement(Settings, {
                            size: '24px',
                            color: colors.white,
                        })}
                    </div>
                    <img src={logo} alt="logo" />
                    <H1Text text={title} size={"24px"}/>
                </div>
            </div>
            <div className={styles.serviceSettingDetails}>
                <H1Text text={"Details"} size={"20px"} color={colors.black}/>
                <p style={{color: "#757575", marginTop:"10px"}}>User name</p>
                <p style={{color: ""}}>{userName}</p>
            </div>
            <div style={{width: '100%', textAlign: 'center'}}>
                <p onClick={() => {handleClickDeleteUser('id')}} className={styles.serviceSettingDelete} style={{cursor: 'pointer', display: 'inline-block'}}>Remove service</p>
            </div>
            { isOpenPopup && (
                <Popup onPress={() => {handleClickDeleteButttonPopup('id')}} leavePopup={handleClosePopup} Title={`Are you sure to delete ${'serviceName'} service?!`} Content="You will no longer have access to this service." TextButton="Confirm" />
            )}
            <BottomNavbar />
        </div>
    );
}

ServiceSetting.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    logo: PropTypes.string,
    userName: PropTypes.string
}

export default ServiceSetting;