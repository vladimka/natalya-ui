import React from 'react';
import './App.css';
import MessageList from './components/MessageList';
import Message from './components/Message';
import SendMessageForm from './components/SendMessageForm';

export default function App() {
  return (
    <div className="App">
      <MessageList>
        <Message fromMe={true} text="Hi!" timestamp={Date.now()} />
        <Message text="Hello, Sir. What are you doing?" timestamp={Date.now()} />
      </MessageList>
    <SendMessageForm/>
    </div>
  );
}