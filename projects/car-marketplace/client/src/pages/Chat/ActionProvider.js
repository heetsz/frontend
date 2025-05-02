import axios from 'axios';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleUserMessage(message) {
    try {
      const res = await axios.post("http://localhost:5000/chat/message", {
        message,
      });

      const botResponse = res.data.response;
      const botMessage = this.createChatBotMessage(botResponse);

      this.setState(prev => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (err) {
      console.error("Error from backend:", err);
      const errorMessage = this.createChatBotMessage("Oops! Something went wrong. Please try again later.");
      this.setState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }
}

export default ActionProvider;
