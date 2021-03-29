import React, { useState, useEffect } from "react";
import decoder from "jwt-decode";
import auth from "../middleware/auth";
import NavigationBar from "../components/Main/NavigationBar";
import Header from "../components/Main/Header";
import Chat from "../components/chat/Chat";
import KEYS from "../KEYS";

export default function Dashboard({ routeProps }) {
    useEffect(() => {
        auth(routeProps);
    }, []);

    const [user] = useState(() => {
        const token = localStorage.getItem(KEYS.LOCAL_STORAGE_KEY);
        return decoder(token);
    });
    const selectedChatIndex = useState(-1);

    useEffect(() => {
        console.log(user);
    }, []);

    return (
        <div className="main-container">
            <NavigationBar />
            <div className="main-container-section">
                <Header />
                <Chat />
            </div>
        </div>
    );
}
