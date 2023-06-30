import { Message } from "@/model/MessageProvider";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import DataDisplay from "./DataDisplay";

const MessageContainer = styled.div<{ $sender: string }>`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  border-left: 1px solid
    ${(p) => (p.$sender === "user" ? "#00bd84" : "#1777ff")};
  margin-bottom: 30px;
`;

const MessageSender = styled.div`
  font-size: 12px;
  color: #999;
  margin-bottom: 5px;
  font-weight: 700;
  text-transform: uppercase;
`;

const MessageText = styled.div`
  font-size: 16px;
`;

const MessageSQL = styled(MessageText)`
  background-color: #444;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Message = ({ message }: { message: Message }) => {
  return (
    <MessageContainer $sender={message.sender}>
      <MessageSender>{message.sender}</MessageSender>
      {message.text && <MessageText>{message.text}</MessageText>}
      {message.sql && (
        <MessageSQL>
          <code>{message.sql}</code>
        </MessageSQL>
      )}
      {message.data && <DataDisplay data={message.data} />}
    </MessageContainer>
  );
};

export default Message;
