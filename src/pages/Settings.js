import React from "react";
import SettingsHeader from "../components/settings/SettingsHeader";
import NavigationBar from "../components/Main/NavigationBar";
import Setting from "../components/settings/Settings";

export default function Settings(props) {
    return (
        <div className="main-container">
            <NavigationBar />
            <div className="main-container-section">
                <SettingsHeader />
                <Setting history={props.history} />
            </div>
        </div>
    );
}
