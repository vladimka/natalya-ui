import React from 'react';
import './index.css';

export default function Message(props){
    const messageWrapperClassNames = ["message-wrapper", props.fromMe ? "fromMe" : ""].join(" ");
    const messageClassNames = ["message", props.fromMe ? "fromMe" : "", "shadow"].join(" ");

    return (
        <div className={messageWrapperClassNames}>
            <div className={messageClassNames}>
                {!props.fromMe && <p className="name">Наталья</p>}
                <p className="text">{props.text}</p>
                <p className="timestamp">{new Date(props.timestamp).toLocaleTimeString()}</p>
            </div>
        </div>
    )
}