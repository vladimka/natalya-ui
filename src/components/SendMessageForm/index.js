import React, { createRef } from 'react';
import './index.css';

export default function SendMessageForm(){
    const inputRef = createRef();

    const submit = e => {
        e.preventDefault();

        let msg = inputRef.current.value;
        msg = msg.trim();
        
        if(msg == '')
            return;

        console.log(msg);

        inputRef.current.value = '';
    }

    return (
        <form onSubmit={submit} className="send-message-form">
            <input type="text" autoComplete="false" ref={inputRef} />
            <button>Send</button>
        </form>
    )
}