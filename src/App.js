import React from 'react';
import './App.css';
import MessageList from './components/MessageList';
import Message from './components/Message';
import SendMessageForm from './components/SendMessageForm';

export default function App() {
  return (
    <div className="App">
      <MessageList>
        <Message fromMe={true}>Hi!</Message>
        <Message>Hello, Sir.</Message>
        <Message fromMe={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Message>
        <Message>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Message>
      </MessageList>
    <SendMessageForm/>
    </div>
  );
}