import React from 'react'

export default function ConversationItem({ conversation }) {
    return (
        <button className="conversation-item">
            <img src="" alt=""></img>
            {conversation.name}
        </button>
    )
}
