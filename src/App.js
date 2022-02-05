import React from 'react';
import './App.css';
import Message from './components/Message';

export default function App() {
  return (
    <div className="App">
      <Message fromMe={true}>Hi!</Message>
      <Message>Hello, Sir.</Message>
    </div>
  );
}