import React from 'react'
import FriendsIcon from "../../assets/img/friends-dark.svg";
import MoreIcon from "../../assets/img/add-dark.svg";

export default function FriendsHeader() {
    return (
        <header className="header">
            <div className="header-friends">
                <img src={FriendsIcon} alt=""></img>
                <div className="header-user-info-name">{"Friends"}</div>
            </div>
            <button className="more"><img src={MoreIcon} alt=""></img></button>
        </header>
    )
}
