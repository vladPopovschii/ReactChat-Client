import React from 'react'

export default function SubmitButton({ text, dark, onclickHandler }) {
    return (
        <button className={`submit-button ${dark ? 'submit-button-dark' : ''}`} type="submit" onClick={onclickHandler}>
            {text}
        </button>
    )
}
