import React, { useState, useEffect } from "react";
import axios from "axios";
import decode from "jwt-decode";
import { nanoid } from "nanoid";
import auth from "../../middleware/auth";

import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

import KEYS from "../../KEYS";

import GoogleImage from "../../assets/img/google.svg";
import FacebookImage from "../../assets/img/facebook.svg";

export default function LogRegCard(props) {
    useEffect(() => {
        if (auth(props)) props.history.push("/dashboard");
    }, []);

    const [isLogin, setIsLogin] = useState(true);
    const [requestError, setRequestError] = useState();
    const [inputIds] = useState(() => {
        const ids = [];
        for (let i = 0; i < 4; i++) {
            ids.push("id-" + nanoid());
        }
        return ids;
    });
    const nicknameRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const confirmPasswordRef = React.createRef();

    useEffect(() => {
        setRequestError("");
    }, [isLogin]);

    function registerUser(e) {
        e.preventDefault();
        axios
            .post("http://localhost:8080/register", {
                nickname: nicknameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                confirmPassword: confirmPasswordRef.current.value,
            })
            .then((res) => {
                if (res.data.succes) {
                    props.history.push("/dashboard");
                } else {
                    setRequestError(res.data.errorMsg);
                }
            })
            .catch((err) => {
                console.log(err);
                props.history.push("/login");
            });
    }

    function loginUser(e) {
        e.preventDefault();

        axios
            .post("http://localhost:8080/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.succes) {
                    localStorage.setItem(
                        KEYS.LOCAL_STORAGE_KEY,
                        res.data.token
                    );
                    props.history.push("/dashboard");
                    props.setupSocket();
                } else {
                    props.history.push("/login");
                    setRequestError(res.data.errorMsg);
                }
            })
            .catch((err) => {
                console.log(err.data);
                props.history.push("/login");
            });
    }

    return (
        <div className={`log-reg-card  ${!isLogin ? "reg-part" : ""}`}>
            <div className="log-reg-card-main-wrapper">
                <div className="log-reg-card-main">
                    <h1 data-error={requestError || ""}>
                        {isLogin ? "Sign In" : "Create account"}
                    </h1>
                    <div className="log-reg-card-alt">
                        <button className="log-reg-card-btn-none">
                            <img src={GoogleImage} alt=""></img>
                        </button>
                        <button className="log-reg-card-btn-none">
                            <img src={FacebookImage} alt=""></img>
                        </button>
                    </div>
                    <div className="log-reg-card-info">
                        {isLogin
                            ? "or use an account:"
                            : "or create an account:"}
                    </div>
                    <form
                        className="log-reg-form"
                        onSubmit={isLogin ? loginUser : registerUser}
                    >
                        {!isLogin && (
                            <InputField
                                key={inputIds[0]}
                                type={"text"}
                                placeholder={"Nickname"}
                                iconIndex={2}
                                ref={nicknameRef}
                            />
                        )}
                        <InputField
                            key={inputIds[1]}
                            type={"email"}
                            placeholder={"Email"}
                            iconIndex={0}
                            ref={emailRef}
                        />
                        <InputField
                            key={inputIds[2]}
                            type={"password"}
                            placeholder={"Password"}
                            iconIndex={1}
                            ref={passwordRef}
                        />
                        {!isLogin && (
                            <InputField
                                key={inputIds[3]}
                                type={"password"}
                                placeholder={"Confirm Password"}
                                iconIndex={1}
                                ref={confirmPasswordRef}
                            />
                        )}
                        <SubmitButton
                            text={isLogin ? "Sign In" : "Sign up"}
                            dark={false}
                        />
                    </form>
                </div>
                <div className="wrapper-filler-main"></div>
            </div>
            <div className="log-reg-card-switch-wapper">
                <div className="wrapper-filler-switch"></div>
                <div className="log-reg-card-switch">
                    <h1 className="light">
                        {isLogin ? "New there?" : "Welcome Back!"}
                    </h1>
                    <div className="log-reg-card-switch-text">
                        {isLogin
                            ? "Just enter your data and start chatting"
                            : "To keep connected with us just join"}
                    </div>
                    <SubmitButton
                        text={isLogin ? "SIgn up" : "sign in"}
                        dark={true}
                        onclickHandler={() => setIsLogin(!isLogin)}
                    />
                </div>
            </div>
        </div>
    );
}
