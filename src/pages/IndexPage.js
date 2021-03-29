import React, { useEffect } from "react";
import auth from "../middleware/auth";

export default function IndexPage(props) {
    useEffect(() => {
        auth(props);
    }, []);

    return <div></div>;
}
