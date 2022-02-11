import React, { useState } from 'react';
import './App.css';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import store from './store';

export default function App(){
  let [messages, setMessages] = useState([]);

  store.subscribe(() => {
    let state = store.getState();
    setMessages(state.messages);
  });

  return (
    <div className="App">
      <MessageList messages={messages} />
      <SendMessageForm />
    </div>
  );
}