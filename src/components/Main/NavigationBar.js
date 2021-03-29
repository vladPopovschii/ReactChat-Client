import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ConversationList from "./ConversationList";
import FriendsIcon from "../../assets/img/friends.svg";
import SettingsIcon from "../../assets/img/setting.svg";

const TEMPLATE_CONVERSATIONS = [
    {
        id: 1,
        name: "Nickname1",
    },
    {
        id: 2,
        name: "Nickname2",
    },
    {
        id: 3,
        name: "Nickname3",
    },
];

function NavigationBar(props) {
    const [conversations, setConversations] = useState(TEMPLATE_CONVERSATIONS);

    return (
        <div className="side-bar">
            <input
                type="text"
                placeholder="Find Conversations"
                className="side-bar-find"
            />
            <div className="navigation-btns">
                <button
                    className="navigation-btn"
                    onClick={() => {
                        props.history.push("/friends");
                    }}
                >
                    <img src={FriendsIcon} alt=""></img>
                    <div>Friends</div>
                </button>
                <button
                    className="navigation-btn"
                    onClick={() => props.history.push("/settings")}
                >
                    <img src={SettingsIcon} alt=""></img>
                    Settings
                </button>
            </div>
            <ConversationList conversations={conversations} />
        </div>
    );
}

export default withRouter(NavigationBar);
