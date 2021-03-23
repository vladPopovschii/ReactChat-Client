import React from "react";
import NavigationBar from "../components/Main/NavigationBar";
import Header from "../components/Main/Header";
import Chat from "../components/Main/Chat";

export default function Main() {
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
