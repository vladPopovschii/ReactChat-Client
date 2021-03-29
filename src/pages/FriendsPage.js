import React, { useEffect } from "react";
import NavigationBar from "../components/Main/NavigationBar";
import FriendsHeader from "../components/Friends/FriendsHeader";
import FriendsList from "../components/Friends/FriendsList";

import auth from "../middleware/auth";

export default function FriendsPage({ routeProps }) {
    useEffect(() => {
        auth(routeProps);
    }, []);
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
