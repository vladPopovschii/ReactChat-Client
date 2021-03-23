import React from 'react'
import ConversationItem from "./ConversationItem";
import AddIcon from "../../assets/img/add-light.svg";

export default function ConversationList({ conversations }) {
    return (
        <div className="conversations-container">
            <div className="conversations-header">
                <h3>Conversations</h3>
                <button><img src={AddIcon} alt=""></img></button>
            </div>
            <div className="conversations-list">
                {conversations.map(conversation => {
                    return <ConversationItem key={conversation.id} conversation={conversation} />
                })}
            </div>
        </div>
    )
}
