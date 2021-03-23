import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginRegister from "./pages/LoginRegister";
import Dashboard from "./pages/Dashboard";
import FriendsPage from "./pages/FriendsPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={IndexPage} exact />
                    <Route path="/login" component={LoginRegister} exact />
                    <Route path="/dashboard" component={Dashboard} exact />
                    <Route path="/friends" component={FriendsPage} exact />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
