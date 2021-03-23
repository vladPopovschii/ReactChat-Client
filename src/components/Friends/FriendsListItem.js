import React from 'react'
import MoreIcon from "../../assets/img/more.svg";

export default function FriendsListItem({ friend }) {
    return (
        <div className="friend-item-container">
            <div>
                <img className="friend-img" src="" alt=""></img>
                {friend.name}
            </div>
            <button><img className="more-btn" src={MoreIcon} alt=""></img></button>
        </div>
    )
}
