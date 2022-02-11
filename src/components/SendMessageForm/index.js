import React, { createRef } from 'react';
import './index.css';
import store from '../../store';

export default function SendMessageForm(){
    const inputRef = createRef();

    const submit = e => {
        e.preventDefault();

        let msg = inputRef.current.value;
        msg = msg.trim();
        
        if(msg == '')
            return;

        store.dispatch({ type : 'APPEND_MESSAGE', message : { text : msg, timestamp : Date.now(), fromMe : true } });
        inputRef.current.value = '';
    }

    return (
        <form onSubmit={submit} className="send-message-form">
            <input type="text" autoComplete="false" ref={inputRef} className="shadow" />
            <button>Send</button>
        </form>
    )
}