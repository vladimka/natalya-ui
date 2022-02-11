import React from 'react';
import './index.css';
import Message from '../Message';

export default function MessageList(props){
    return (
        <div className="message-list">
            {props.messages.map((msg, i) => <Message key={i} timestamp={msg.timestamp} text={msg.text} fromMe={msg.fromMe || false} />)}
        </div>
    )
}