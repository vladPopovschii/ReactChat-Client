import React, { useEffect } from "react";
import axios from "axios";

export default function IndexPage(props) {
    useEffect(() => {
        axios.get("http://localhost:8080/login").then((res) => {
            const token = localStorage.getItem("CC_Token");
            console.log(token);
            if (!token) {
                props.history.push("/login");
            } else {
                props.history.push("/dashboard");
            }
        });
    }, []);

    return <div></div>;
}
