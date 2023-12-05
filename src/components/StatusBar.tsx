// components/StatusBar.tsx

import React from 'react';
import { useMessage } from '../contexts/MessageContext';

const StatusBar: React.FC = () => {
  const { message, hoverMessage } = useMessage();

  let displayMessage = hoverMessage.isHoverMessage ? hoverMessage.text : message.text;
  if (!displayMessage) return null;

  let bgColor = 'bg-blue-600'; // default color
  if (message.type === 'error' && !hoverMessage.isHoverMessage) bgColor = 'bg-red-600';

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-2 text-white text-center ${bgColor}`}>
      {displayMessage}
    </div>
  );
};

export default StatusBar;
