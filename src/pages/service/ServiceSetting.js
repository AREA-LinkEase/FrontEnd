import React from "react";
import PropTypes from "prop-types";
import * as Icon from "react-feather";
import {colors} from "../../style/color";
import styles from "./ServiceSetting.module.css";
import H1Text from "../../components/texts/H1Text";
import BottomNavbar from "../../components/navbar/BottomNavbar";

const ServiceSetting = ({
                     color = "gray",
                     title = "Service",
                     logo = "https://via.placeholder.com/71",
                     userName = "no name"
                 }) => {

        const Settings = Icon['ChevronLeft'];

    return (
        <div>
            <div style={{
                background: color,
                height: "318px",
                position: 'fixed',
                zIndex: 2000, top: '0',
                width: '100%'
            }}>
                <div className={styles.serviceBackground}>
                    <div
                        style={{cursor: 'pointer',
                            marginLeft: 'auto',
                            marginRight: '-12px',
                            zIndex: "3000",
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
            <p className={styles.serviceSettingDelete}>Remove service</p>
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