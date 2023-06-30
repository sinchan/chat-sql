import { MessageContext } from "@/model/MessageProvider";
import { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
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
  const bottomRef = useRef<any>(null);

  useEffect(() => {
    if (bottomRef.current) {
      // add a delay of 0.2s to allow the message to be rendered
      setTimeout(() => {
        bottomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }, 200);
    }
  }, [messages]);

  console.log("messages", messages);

  return (
    <MessageListContainer>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <div ref={bottomRef} />
    </MessageListContainer>
  );
}
