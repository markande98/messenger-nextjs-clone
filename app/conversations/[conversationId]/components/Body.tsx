"use client";

import useCoversation from "@/app/hooks/useConversation";
import { FullMessageType } from "@/app/types";
import { useRef, useState } from "react";
import MessageBox from "./MessageBox";

interface BodyProps {
  initialMessages: FullMessageType[];
}
const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  const [messages, setMesages] = useState(initialMessages);

  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useCoversation();

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBox
          isLast={index === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
