import React from 'react'

export default function SystemMessage({ message }) {
    return (
        <div className="system-message-container">
            {message.body}
        </div>
    )
}
