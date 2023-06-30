import { MessageContext } from "@/model/MessageProvider";
import { Button, Input } from "antd";
import { useContext, useState } from "react";
import { styled } from "styled-components";

const { TextArea } = Input;

const InputRow = styled.div`
  display: flex;
  align-items: stretch;
  padding: 30px;
  gap: 20px;
  font-size: 16px;

  textarea {
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2),
      0px 2px 14px 0px rgba(0, 0, 0, 0.05);
    padding: 10px 20px;
  }

  button {
    height: 100%;
    border-radius: 10px;
    background-color: #000;
  }
`;

const MessageInput = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const { sendMessage } = useContext(MessageContext);
  const [loading, setLoading] = useState(false);

  const _sendMessage = async () => {
    if (currentMessage.length === 0) return;
    setCurrentMessage("");
    setLoading(true);
    await sendMessage(currentMessage);
    setLoading(false);
  };

  return (
    <InputRow>
      <TextArea
        size="large"
        rows={3}
        onChange={(e) => setCurrentMessage(e.target.value)}
        value={currentMessage}
        onPressEnter={_sendMessage}
        placeholder="Number of orders placed in 2023..."
        disabled={loading}
      />
      <Button type="primary" onClick={_sendMessage} loading={loading}>
        Send
      </Button>
    </InputRow>
  );
};
export default MessageInput;
