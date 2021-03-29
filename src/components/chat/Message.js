import React from 'react'

function formatTime(time) {
    const date = new Date(time)
    return `${date.getHours()}:${date.getMinutes()}`
}

export default function Message({message}) {
    return (
        <div className={`message-container ${message.sender ? 'sender' : ''}`}>
            {message.body}
            <div className="message-time">{formatTime(message.time)}</div>
        </div>
    )
}
