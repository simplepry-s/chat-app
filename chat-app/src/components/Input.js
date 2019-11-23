import React from "react";
import PropsTypes from "prop-types";

const Input = props => {
  const { setMessage, sendMessage, message } = props;

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={e => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

Input.propsTypes = {
  setMessage: PropsTypes.func.isRequired,
  sendMessage: PropsTypes.func.isRequired,
  message: PropsTypes.string.isRequired
};

export default Input;
