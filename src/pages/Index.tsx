
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { MessageList } from '@/components/MessageList';
import { MessageInput } from '@/components/MessageInput';
import { MemoryCard } from '@/components/MemoryCard';

const Index = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "你知道看过哪些电影吗?",
      timestamp: "2025/4/24 14:13:01",
      category: "entertainment"
    },
    {
      id: 2,
      text: "User name is chendong",
      timestamp: "2025/4/24 14:10:02",
      category: "personal_details"
    },
    {
      id: 3,
      text: "Preparing to go on a fall outing tomorrow",
      timestamp: "2024/9/26 17:28:50",
      category: "travel"
    }
  ]);

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar - Chat History */}
      <Sidebar messages={messages} />
      
      {/* Middle - Chat Area */}
      <div className="flex-1 flex flex-col border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Chat</h2>
        </div>
        <MessageList />
        <MessageInput />
      </div>

      {/* Right Sidebar - Memories */}
      <div className="w-96 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Your Memories (4)</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {[0.23, 0.37, 0.32, 0.30].map((score, index) => (
              <MemoryCard
                key={index}
                score={score}
                index={index + 1}
                content={messages[index % messages.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
