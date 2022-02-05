import React from 'react';
import './index.css';

export default function Message(props){
    const messageWrapperClassNames = ["message-wrapper", props.fromMe ? "fromMe" : ""].join(" ");
    const messageClassNames = ["message", props.fromMe ? "fromMe" : ""].join(" ");

    return (
        <div className={messageWrapperClassNames}>
            <div className={messageClassNames}>
                {props.children}
            </div>
        </div>
    )
}