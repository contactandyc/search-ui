// contexts/MessageContext.tsx

import React, { createContext, useContext, useState, useRef, ReactNode } from 'react';

type MessageType = 'error' | 'info' | 'tip';

interface Message {
  text: string;
  type: MessageType;
}

interface HoverMessage {
  text: string;
  isHoverMessage: boolean;
}

interface MessageContextType {
  message: Message;
  hoverMessage: HoverMessage;
  reportMessage: (text: string, type: MessageType) => void;
  reportHoverMessage: (text: string) => void;
}

export const MessageContext = createContext<MessageContextType>({} as MessageContextType);

export const useMessage = () => useContext(MessageContext);

interface MessageProviderProps {
  children: ReactNode;
}

export const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
  const [message, setMessage] = useState<Message>({ text: '', type: 'info' });
  const [hoverMessage, setHoverMessage] = useState<HoverMessage>({ text: '', isHoverMessage: false });
  const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const reportMessage = (text: string, type: MessageType = 'info') => {
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }

    setMessage({ text, type });

    if (!hoverMessage.isHoverMessage) {
      messageTimeoutRef.current = setTimeout(() => {
        setMessage({ text: '', type: 'info' });
        messageTimeoutRef.current = null;
      }, 5000);
    }
  };

  const reportHoverMessage = (text: string) => {
    if (text) {
      setHoverMessage({ text, isHoverMessage: true });
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }
    } else if (hoverMessage.isHoverMessage) {
      setHoverMessage({ text: '', isHoverMessage: false });
      reportMessage(message.text, message.type);
    }
  };

  return (
    <MessageContext.Provider value={{ message, hoverMessage, reportMessage, reportHoverMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
