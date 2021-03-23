import React from "react";
import LogRegCard from "../components/LoginRegister/LogRegCard";

export default function LoginRegister(props) {
    return (
        <div className="reg-log">
            <LogRegCard history={props.history} />
        </div>
    );
}
