import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.id = 'vectorshift-chat-widget';
    script.src = 'https://app.vectorshift.ai/chatWidget.js';
    script.setAttribute('chatbot-id', '67c3b248645ea4c9031d026d');
    script.setAttribute('chatbot-height', '600px');
    script.setAttribute('chatbot-width', '400px');
    
    // Append to body
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div id="chatbot-container" style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000
    }}>
      {/* The chatbot will be injected here */}
    </div>
  );
};

export default ChatBot;