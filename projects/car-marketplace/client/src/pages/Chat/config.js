import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Mustang';

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}, your car-buying companion. How can I help you today?`)
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: 'red',
    },
    chatButton: {
      backgroundColor: 'green', // submit button
    },
  }
};

export default config;
