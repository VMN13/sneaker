import React, {useState} from "react";
import { Chatbot } from "react-chatbot-kit";
import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

export default function Chat() {
  return (
    <div className="chatbot">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}/>
    </div>
  );
};
