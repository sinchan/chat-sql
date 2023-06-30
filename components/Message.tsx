import { Message } from "@/model/MessageProvider";
import { styled } from "styled-components";

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

const Message = ({ message }: { message: Message }) => {
  return (
    <MessageContainer $sender={message.sender}>
      <MessageSender>{message.sender}</MessageSender>
      {message.text && <MessageText>{message.text}</MessageText>}
    </MessageContainer>
  );
};

export default Message;
