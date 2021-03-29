import React, { useState } from "react";

import KEYS from "../../KEYS";

import Message from "./Message";
import AddIcon from "../../assets/img/add-dark.svg";
import EmojiIcon from "../../assets/img/emoji.svg";
import GifIcon from "../../assets/img/gif.svg";
import SystemMessage from "./SystemMessage";

const SAMPLE_MESSAGES = [
    {
        id: 1,
        body: "Some message\nSecond row",
        time: Date.now(),
        sender: true,
    },
    {
        id: 2,
        body: "Another message",
        time: Date.now(),
        sender: false,
    },
    {
        id: 5,
        body: "March, 12",
        timee: Date.now(),
        system: true,
    },
    {
        id: 3,
        body: "Some message",
        time: Date.now(),
        sender: false,
    },
    {
        id: 4,
        body: "Some message",
        time: Date.now(),
        sender: true,
    },
];

export default function Chat({ chatroomId }) {
    const [messages, setMessages] = useState(SAMPLE_MESSAGES);

    return (
        <div className="chat">
            <div className="chat-container">
                {messages.map((message) => {
                    return message.system ? (
                        <SystemMessage key={message.id} message={message} />
                    ) : (
                        <Message key={message.id} message={message} />
                    );
                })}
            </div>
            <form className="chat-input-container">
                <button className="chat-add">
                    <img src={AddIcon} alt=""></img>
                </button>
                <input type="text" placeholder="Type a message..." />
                <button>
                    <img src={EmojiIcon} alt=""></img>
                </button>
                <button>
                    <img src={GifIcon} alt=""></img>
                </button>
            </form>
        </div>
    );
}
