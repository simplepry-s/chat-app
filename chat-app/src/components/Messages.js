import React from "react";
import PropsTypes from "prop-types";
import ScrollToBottom from "react-scroll-to-bottom";
import { Message } from "./";

const Messages = props => {
  const { messages, name } = props;
  console.log("sss", messages);
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

Messages.propsTypes = {
  messages: PropsTypes.arrayOf(
    PropsTypes.shape({
      user: PropsTypes.string.isRequired,
      text: PropsTypes.string.isRequired,
      image: PropsTypes.string.isRequired
    })
  ),
  name: PropsTypes.string.isRequired
};

export default Messages;
