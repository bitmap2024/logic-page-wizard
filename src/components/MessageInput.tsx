
import React from 'react';
import { Send } from 'lucide-react';

export const MessageInput = () => {
  return (
    <div className="border-t border-gray-200 p-4">
      <div className="max-w-4xl mx-auto flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
