import MessageProvider from "@/model/MessageProvider";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatUI = () => {
  return (
    <MessageProvider>
      <MessageList />
      <MessageInput />
    </MessageProvider>
  );
};

export default ChatUI;
