import React from "react";

import EmailIcon from "../../assets/img/email.svg";
import PasswordIcon from "../../assets/img/password.svg";
import NameIcon from "../../assets/img/nickname.svg";

const icons = [EmailIcon, PasswordIcon, NameIcon];

const InputField = React.forwardRef(({ placeholder, type, iconIndex }, ref) => (
    <div className="input-field">
        <img src={icons[iconIndex]} alt=""></img>
        <input ref={ref} type={type} placeholder={placeholder} required />
    </div>
));

export default InputField;
