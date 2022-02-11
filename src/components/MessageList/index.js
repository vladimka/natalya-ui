import React from 'react';
import './index.css';

export default function MessageList(props){
    return (
        <div className="message-list">
            {props.children}
        </div>
    )
}