
import React, { useState, KeyboardEvent } from 'react';
import { PhoneCall } from 'lucide-react';
import { VoiceCallDialog } from './VoiceCallDialog';

export const MessageInput = () => {
  const [isVoiceCallOpen, setIsVoiceCallOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState('');

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && message.trim()) {
      // Here you would handle sending the message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <>
      <div className="border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"
            onClick={() => setIsVoiceCallOpen(true)}
          >
            <PhoneCall className="w-5 h-5" />
          </button>
        </div>
      </div>

      <VoiceCallDialog 
        isOpen={isVoiceCallOpen}
        onClose={() => {
          setIsVoiceCallOpen(false);
          setIsListening(false);
        }}
        isListening={isListening}
      />
    </>
  );
};
