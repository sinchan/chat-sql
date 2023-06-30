import { MessageContext } from "@/model/MessageProvider";
import { useContext } from "react";
import { styled } from "styled-components";
import Message from "./Message";

const MessageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  padding: 30px 50px;
`;

export default function MessageList() {
  const { messages } = useContext(MessageContext);

  console.log("messages", messages);

  return (
    <MessageListContainer>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </MessageListContainer>
  );
}
