import React from 'react'
import MoreIcon from '../../assets/img/more.svg'

export default function Header() {
    return (
        <header className="header">
            <div className="header-user-info">
                <img className="img" src="" alt=""></img>
                <div className="header-user-info-name">{"Nickname"}</div>
                <div data-status="online"></div>
            </div>
            <button className="more"><img src={MoreIcon} alt=""></img></button>
        </header>
    )
}
