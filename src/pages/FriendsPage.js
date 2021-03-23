import React from "react";
import NavigationBar from "../components/Main/NavigationBar";
import FriendsHeader from "../components/Friends/FriendsHeader";
import FriendsList from "../components/Friends/FriendsList";

export default function Main() {
    return (
        <div className="main-container">
            <NavigationBar />
            <div className="main-container-section">
                <FriendsHeader />
                <FriendsList />
            </div>
        </div>
    );
}
