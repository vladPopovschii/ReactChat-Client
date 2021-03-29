import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import io from "socket.io-client";
import KEYS from "./KEYS";

import IndexPage from "./pages/IndexPage";
import LoginRegister from "./pages/LoginRegister";
import Dashboard from "./pages/Dashboard";
import FriendsPage from "./pages/FriendsPage";
import Settings from "./pages/Settings";

function App() {
    const [socket, setSocket] = useState();

    const setupSocket = () => {
        const token = localStorage.getItem(KEYS.LOCAL_STORAGE_KEY);
        let newSocket;

        if (!token) return;

        newSocket = io("http://localhost:8080", {
            query: {
                token,
            },
            withCredentials: true,
        });

        newSocket.on("disconnect", () => {
            setSocket(null);
        });

        setSocket(newSocket);
    };

    useEffect(() => {
        setupSocket();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={IndexPage} exact />
                    <Route
                        path="/login"
                        render={() => (
                            <LoginRegister setupSocket={setupSocket} />
                        )}
                        component={LoginRegister}
                        exact
                    />
                    <Route
                        path="/dashboard"
                        render={(routeProps) => (
                            <Dashboard
                                routeProps={routeProps}
                                socket={socket}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/friends"
                        render={(routeProps) => (
                            <FriendsPage
                                routeProps={routeProps}
                                socket={socket}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/settings"
                        render={(routeProps) => (
                            <Settings routeProps={routeProps} socket={socket} />
                        )}
                        exact
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
