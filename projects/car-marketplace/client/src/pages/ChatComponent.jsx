import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from './Chat/config';
import MessageParser from './Chat/MessageParser';
import ActionProvider from './Chat/ActionProvider';

import './ChatbotStyles.css'; 

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Floating Ball Button */}
      <div className="chatbot-float-button" onClick={toggleChat}>
            <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Chatbot" className="chatbot-icon" />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-popup">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
