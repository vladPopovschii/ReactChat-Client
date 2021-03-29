import React from "react";
import { withRouter } from "react-router-dom";

import logout from "../../middleware/logout";
import LogoutIcon from "../../assets/img/logout.svg";

function Settings(props) {
    return (
        <div className="settings-container">
            <button
                onClick={() => logout(props.history)}
                className="logout-btn"
            >
                <img src={LogoutIcon} alt=""></img>Log out
            </button>
        </div>
    );
}

export default withRouter(Settings);
