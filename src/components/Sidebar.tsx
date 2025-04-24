
import React from 'react';

export const Sidebar = ({ messages }: { messages: any[] }) => {
  return (
    <div className="w-80 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Today</h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
          >
            <div className="text-sm text-gray-900">{message.text}</div>
            <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
