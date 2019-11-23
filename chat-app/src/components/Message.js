import React from "react";
import PropsTypes from "prop-types";

const Message = props => {
  const {
    message: { text, user, image },
    name
  } = props;
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10"></p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{text}</p>
      </div>
      <p className="sentText pl-10 ">
        <img src={image} width={"40px"} height={"40px"} />
      </p>
    </div>
  );
};

Message.propsTypes = {
  messages: PropsTypes.shape({
    user: PropsTypes.string.isRequired,
    text: PropsTypes.string.isRequired,
    image: PropsTypes.string.isRequired
  }),
  name: PropsTypes.string.isRequired
};
export default Message;
