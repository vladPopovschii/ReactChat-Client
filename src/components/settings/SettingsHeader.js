import React from "react";
import SettingsIcon from "../../assets/img/gear-dark.svg";

export default function SettingsHeader() {
    return (
        <header className="header">
            <div className="header-friends">
                <img src={SettingsIcon} alt=""></img>
                <div className="header-user-info-name">Settings</div>
            </div>
        </header>
    );
}
